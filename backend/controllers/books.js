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

// get specified book
booksRouter.get('/:id', async (request, response) => {
  const book = await Book.findById(request.params.id);

  if (book) {
    response.json(book);
  } else {
    response.status(400).end();
  }
});

// get books for specific user
booksRouter.get('/', async (request, response) => {
  if (request.query.user) {
    const books = await Book.find({ user: request.query.user });
    response.json(books);
  } else {
    const books = await Book.find({});
    response.json(books);
  }
  
})

// add new book to collection
booksRouter.post('/', async (request, response) => {
  const { body } = request;
  const token = getTokenFrom(request);
  console.log(token);
  const decodeToken = jwt.verify(token, process.env.TOKEN);

  if (!token || !decodeToken.id) {
    response.status(401).json({ error: 'unauthorized access '});
  }

  const user = await User.findById(decodeToken.id);
  const existingBook = await Book.findOne({ title: body.title });

  const newBook = ({
    title: body.title,
    author: body.author,
    published: body.published,
    img: body.img,
    status: body.status,
    user: existingBook ? existingBook.user.concat(user._id): user._id,
  });

  const savedBook = await Book.findOneAndUpdate({ title: body.title }, newBook, {
    new:true,
    upsert: true,
  });
  user.books = user.books.concat(savedBook);
  await user.save();

  response.json(savedBook);
})

// update specific book
booksRouter.put('/', async (request,response) => {
  const { body } = request;
  const token = getTokenFrom(request);

  const decodeToken = jwt.verify(token, process.env.TOKEN);
  if (!token || !decodeToken.id) {
    response.status(401).json({ error: 'unauthorized access '});
  }
  const bookUpdated = await Book.findByIdAndUpdate( { _id: body.id}, { status: body.status }, { new: true });
  response.json(bookUpdated);
})

booksRouter.delete('/:id', async (request, response) => {
  const { body } = request;

  await Book.findByIdAndDelete({ _id: request.params.id });
  response.status(204);
})

module.exports = booksRouter;