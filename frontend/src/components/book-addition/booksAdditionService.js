import axios from 'axios';

const baseUrl = 'https://blooming-brook-04733.herokuapp.com/api/books';
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
