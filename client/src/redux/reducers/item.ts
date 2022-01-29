export const items = (state = [], action) => {
  switch (action.type) {
    case 'GET_ITEMS': {
      return [...state, action.data];
    }
    default:
      return state;
  }
};
