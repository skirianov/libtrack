const loggedInUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
    default:
      return state;
  }
};

export default loggedInUserReducer;

export const loggedInUserAction = (user) => ({
  type: 'LOGIN_USER',
  payload: user,
});
