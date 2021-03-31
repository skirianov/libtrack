import axios from 'axios';

const baseUrl = 'https://blooming-brook-04733.herokuapp.com/api/books';
let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const updateBook = async (book) => {
  const header = {
    headers: { Authorization: token },
  };
  const savedBook = await axios.put(baseUrl, book, header);
  return savedBook.data;
};

const deleteBook = async (book) => {
  const header = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${book.id}`);
};

const bookService = {
  updateBook,
  deleteBook,
  setToken,
};

export default bookService;
