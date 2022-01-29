import {
  useGet_ItemQuery,
  useCreate_ItemMutation,
} from '../../generated/graphql';

// const [, /*{ fetching, data, error }*/ getItem] = useGet_ItemQuery();
// const [, createItem] = useCreate_ItemMutation();

export const getOneItem = () => {
  return async (dispatch, getState) => {
    // const item = await getItem();
    const item = 'item is found!!';
    console.log('item in reducer/action: ' + item);
    dispatch({
      type: 'GET_ITEM',
      payload: item,
    });
  };
};

// export const createOneItem = () => {
//   return async (dispatch, getState) => {
//     const item = await createItem();
//   };
// };
