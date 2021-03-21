const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_BOOKS':
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;

export const booksAction = (books) => ({
  type: 'ALL_BOOKS',
  payload: books,
});
