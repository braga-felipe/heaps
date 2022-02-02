export const items = (state = [], action) => {
  switch (action.type) {
    case 'GET_ITEM': {
      console.log('resolver triggered GET_ITEM');
      console.log('action.payload: ' + action.payload);
      return action.payload;
    }
    case 'CREATE_ITEM': {
      const payload = action.payload;
      console.log('resolver triggered CREATE_ITEM');
      console.log('action payload: ' + { payload });
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
