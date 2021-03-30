const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  author: {
    type: String,
  },
  published: {
    type: String,
  },
  img: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

bookSchema.plugin(uniqueValidator);

bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;