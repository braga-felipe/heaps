export const items = (state = [], action) => {
  switch (action.type) {
    case 'GET_ITEM': {
      console.log('resolver triggered GET_ITEM');
      console.log('action.payload: ' + action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};
