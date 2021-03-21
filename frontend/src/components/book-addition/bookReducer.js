const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return action.payload;
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};

export default bookReducer;

export const bookAction = (book) => ({
  type: 'ADD_BOOK',
  payload: book.volumeInfo,
});

export const bookClear = (book) => ({
  type: 'CLEAR',
});
