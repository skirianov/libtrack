import axios from 'axios';

const googleUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

const getBooks = async (query) => {
  const toArray = query.split(' ');
  const toString = toArray.join('+');
  const receivedBooks = await axios
    // eslint-disable-next-line max-len
    .get(`${googleUrl}${toString}&printType=books&langRestrict=en&keyes&key=x`)
    .catch((error) => {
      console.log(error);
    });
  if (receivedBooks) {
    return receivedBooks.data.items;
  }
  return null;
};

const searchService = {
  getBooks,
};

export default searchService;
