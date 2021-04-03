import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/books' || '/api/books';
let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const addBook = async (book) => {
  const header = {
    headers: { Authorization: token },
  };
  const savedBook = await axios.post(baseUrl, book, header);
  return savedBook;
};

const booksAddServices = {
  addBook,
  setToken,
};

export default booksAddServices;
