interface Action {
  type: string;
  payload: [];
}

export const items = (state = [], action: Action) => {
  switch (action.type) {
    case 'GET_MY_ITEMS': {
      console.log('ITEMS IN REDUCER: ', action.payload);
      return action.payload ? action.payload : state;
    }
    case 'CREATE_ITEM': {
      return [...state, action.payload];
    }
    case 'GET_ALL_ITEMS': {
      return action.payload ? action.payload : state;
    }
    default:
      return state;
  }
};
