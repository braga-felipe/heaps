import { useGet_ItemQuery } from '../../generated/graphql';
const [, /*{ fetching, data, error }*/ getItem] = useGet_ItemQuery();
export const getOneItem = () => {
  return async (dispatch, getState) => {
    const item = await getItem();
    dispatch({
      type: 'GET_ITEM',
      payload: item,
    });
  };
};
