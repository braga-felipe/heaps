import type { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getAllItems } from '../redux/actions/items';
import { useGet_All_ItemsQuery, useMeQuery } from '../generated/graphql';
import Home from '../components/Home/Home';
import { useEffect } from 'react';
import { getInitialUser } from '../redux/actions/user';
import '@fontsource/lobster';
import Avatar from '../components/Assets/Avatar';

export interface State {
  user?;
  items?;
}

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();

  const getItemsList = () => {
    const [{ data }] = useGet_All_ItemsQuery();
    return data && data.getAllItems;
  };

  const getMeData = () => {
    const [{ data }] = useMeQuery();
    return data && data.me;
  };

  const itemList = getItemsList();

  const meUser = getMeData();

  useEffect(() => {
    dispatch(getAllItems(itemList));
    meUser && dispatch(getInitialUser(meUser));
  });

  return (
    <>
      {meUser && (<Heading sx={HcStyle()}>
        Hello, {meUser.username}!</Heading>)}
      <Heading sx={HStyle()}>Heaps</Heading>
      <Home />
    </>
  );
};
function HStyle() {
  return {
    position: 'fixed',
    fontFamily: 'Lobster',
    fontSize: '3xl',
    margin: '2%',
    color: '#5D55B4;'
  };
}

function HcStyle() {
  return {
    position: 'fixed',
    left: '270px',
    fontSize: 'xs',
    zIndex: '1',
    backgroundColor: 'white',
    width: '100%',
  };
}

export default IndexPage;
