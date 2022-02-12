import axios from 'axios';

export const getOneItem = () => {
  return async (dispatch, getState) => {
    const item = 'item is found!!';
    console.log('item in reducer/action: ' + item);
    dispatch({
      type: 'GET_ITEM',
      payload: item,
    });
  };
};

export const getMyItems = (items) => ({
  type: 'GET_MY_ITEMS',
  payload: items,
});

export const getAllItems = (items) => ({
  type: 'GET_ALL_ITEMS',
  payload: items,
});

export const createOneItem = (item) => ({ type: 'CREATE_ITEM', payload: item });
