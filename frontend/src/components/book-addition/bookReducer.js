const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;

export const bookAction = (book) => ({
  type: 'ADD_BOOK',
  payload: book.volumeInfo,
});
