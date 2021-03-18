const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;

export const modalAction = (bool) => ({
  type: 'SHOW',
  payload: bool,
});
