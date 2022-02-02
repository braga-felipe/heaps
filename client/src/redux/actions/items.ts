import {
  useGet_ItemQuery,
  useCreate_ItemMutation,
} from '../../generated/graphql';

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

export const createOneItem = (item) => ({ type: 'CREATE_ITEM', payload: item });
