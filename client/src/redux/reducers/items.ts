export const items = (state = [], action) => {
  switch (action.type) {
    case 'GET_ITEM': {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
