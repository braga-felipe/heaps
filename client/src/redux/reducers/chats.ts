export const chats = (state = [], action) => {
  switch (action) {
    case 'GET_ALL_CHATS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
