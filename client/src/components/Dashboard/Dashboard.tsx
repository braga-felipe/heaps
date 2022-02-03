import React, { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { getAllItems } from '../../redux/actions/items';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../Register/Register';
import { useMeQuery } from '../../generated/graphql';
import { getInitialUser } from '../../redux/actions/user';

export default function Dashboard() {
  const dispatch = useDispatch();
  // fetching user using session id
  const [{ error, fetching, data }] = useMeQuery();
  const user = data?.me;
  // storing user in store
  user && dispatch(getInitialUser(user));
  // getAllItems items from the store, to be filtered by user id
  useEffect(() => {
    dispatch(getAllItems());
  }, []);
  const items = useSelector((state: State) => state.items);
  console.log(items);
  return (
    <Container>
      <Box>
        <h1>NavBar</h1>
      </Box>
      <Box>
        <Heading>Dashboard</Heading>
      </Box>
      <Text fontSize='2xl'>Current List</Text>
      <Box className='list'>
        <ItemList complete={false} />
      </Box>
      <Text fontSize='2xl'>Past List</Text>
      <Box className='list'>
        <ItemList complete={true} />
      </Box>
    </Container>
  );
}
