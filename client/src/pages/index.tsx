import type { NextPage } from 'next';
import { Container, Heading, Image } from '@chakra-ui/react';
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
  chats?;
}

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();

  const getItemsList = () => {
    const [{ data, fetching }] = useGet_All_ItemsQuery();
    return data && data.getAllItems;
  };

  // TODO:take care of async with then?
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
      {meUser && <Heading sx={HcStyle()}>Hello, {meUser.username}!</Heading>}
      <Container sx={cStyle()}>
        <Image src='/code_works_heaps.png' boxSize='60px' />
      </Container>
      <Heading sx={HStyle()} >Heaps</Heading>
      <Home />
    </>
  );
};
function cStyle() {
  return {
    position: 'fixed',
    fontFamily: 'Lobster',
    fontSize: '3xl',
    color: '#5D55B4;',
  };
}
function HStyle() {
  return {
    position: 'absolute',
    marginTop: '14%',
    fontFamily: 'Lobster',
    marginLeft: '7.5%',
    fontSize: 'xs',
    color: '#5D55B4;',
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
    color: '#5D55B4;',
  };
}

export default IndexPage;
