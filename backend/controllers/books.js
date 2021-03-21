const booksRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const Book = require('../models/books');
const User = require('../models/user');

const getTokenFrom = request => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }

  return null;
};

// get all books
booksRouter.get('/', async (request, response) => {
  const books = await Book.find({});
  response.json(books);
})

// get specified book
booksRouter.get('/:id', async (request, response) => {
  const book = await Book.findById(request.params.id);

  if (book) {
    response.json(book);
  } else {
    response.status(400).end();
  }
});

// add new book to collection
booksRouter.post('/', async (request, response) => {
  const { body } = request;
  const token = getTokenFrom(request);
  const decodeToken = jwt.verify(token, process.env.TOKEN);

  if (!token || !decodeToken.id) {
    response.status(401).json({ error: 'unauthorized access '});
  }

  const user = await User.findById(decodeToken.id);
    const newBook = new Book({
      title: body.title,
      author: body.author,
      published: body.published,
      img: body.img,
      status: 'not read',
      user: user.id,
  });

  const savedBook = await newBook.save();
  user.books = user.books.concat(savedBook);
  await user.save();

  response.json(savedBook);
})

module.exports = booksRouter;