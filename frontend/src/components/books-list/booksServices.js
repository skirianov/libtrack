import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/books';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const booksService = {
  getAll,
};

export default booksService;
