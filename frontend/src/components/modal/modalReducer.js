const modalReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'REGISTER':
      return action.payload;
    case 'BOOK_ADD':
      return action.payload;
    case 'MOBILE_SEARCH':
      return action.payload;
    case 'REGISTERED':
      return action.payload;
    case 'CLOSE_MODAL':
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;

export const modalAction = (type, text) => ({
  type,
  payload: text,
});

export const modalClose = () => ({
  type: 'CLOSE_MODAL',
  payload: '',
});
