const drawerReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN':
      return action.payload;
    case 'CLOSE':
      return action.payload;
    default:
      return state;
  }
};

export default drawerReducer;

export const drawerAction = (drawer) => {
  if (drawer) {
    return (
      {
        type: 'OPEN',
        payload: true,
      }
    );
  }
  return (
    {
      type: 'CLOSE',
      payload: false,
    }
  );
};
