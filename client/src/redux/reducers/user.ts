export const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER': {
      return action.data;
    }
    case 'CREATE_USER': {
      return { ...state, ...action.payload };
    }
    case 'GET_INITIAL_USER': {
      return {};
    }
    default:
      return state;
  }
};
