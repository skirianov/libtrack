const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'FOUND_BOOKS':
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;

export const searchAction = (books) => ({
  type: 'FOUND_BOOKS',
  payload: books,
});
