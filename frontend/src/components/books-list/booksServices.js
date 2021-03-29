import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/books';

const getUserBooks = async (user) => {
  const response = await axios.get(baseUrl, { params: { user: user.id } });
  return response.data;
};

const booksService = {
  getUserBooks,
};

export default booksService;
