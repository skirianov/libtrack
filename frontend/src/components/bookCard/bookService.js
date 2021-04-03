import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/books' || '/api/books';
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

  await axios.delete(`${baseUrl}/${book.id}`);
};

const bookService = {
  updateBook,
  deleteBook,
  setToken,
};

export default bookService;
