import axios from 'axios';

const baseUrl = 'https://blooming-brook-04733.herokuapp.com/api/books';

const getUserBooks = async (user) => {
  const response = await axios.get(baseUrl, { params: { user: user.id } });
  return response.data;
};

const booksService = {
  getUserBooks,
};

export default booksService;
