import {
  useGet_ItemQuery,
  useCreate_ItemMutation,
} from '../../generated/graphql';
import getDataOptions from '../../axios/api.js';
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

export const getAllMyItems = (items) => ({
  type: 'GET_MY_ITEMS',
  payload: items,
});

export const getAllItems = () => async (dispatch, getState) => {
  axios({
    method: 'post',
    url: 'http://localhost:4000/graphql',
    data: {
      query: `query {
        getAllItems {
          name
          description
          ownerId
          complete
        }
      }`,
    },
  })
    .then((res) => {
      const data = res.data.data.getAllItems;
      dispatch({
        type: 'GET_ALL_ITEMS',
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const createOneItem = (item) => ({ type: 'CREATE_ITEM', payload: item });
