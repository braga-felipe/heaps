import React, { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { getAllItems, getMyItems } from '../../redux/actions/items';
import { useDispatch } from 'react-redux';
import { useMeQuery } from '../../generated/graphql';
import { getInitialUser } from '../../redux/actions/user';

export default function Dashboard() {
  const dispatch = useDispatch();
  // fetching user using session id
  const [{ error, fetching, data }] = useMeQuery();
  const user = data?.me;

  useEffect(() => {
    // storing user in store
    if (user) {
      dispatch(getInitialUser(user));
      dispatch(getMyItems(user.items_owned));
    }
  }, []);

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
