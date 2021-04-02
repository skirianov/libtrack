const searchReducer = (state = false, action) => {
  if (action.type === 'SHOW_SEARCH') {
    return action.payload;
  }
  return state;
};

export default searchReducer;

export const searchAction = (bool) => ({
  type: 'SHOW_SEARCH',
  payload: bool,
});
