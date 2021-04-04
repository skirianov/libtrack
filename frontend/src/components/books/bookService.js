import axios from 'axios';

const baseUrl = '/api/books';
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

  await axios.delete(`${baseUrl}/${book.id}`);
};

const getUserBooks = async (user) => {
  const response = await axios.get(baseUrl, { params: { user: user.id } });
  return response.data;
};

const booksServices = {
  addBook,
  updateBook,
  deleteBook,
  getUserBooks,
  setToken,
};

export default booksServices;
