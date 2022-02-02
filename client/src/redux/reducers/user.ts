export const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER': {
      return action.data;
    }
    case 'CREATE_USER': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};
