import React from 'react';
import ItemList from '../ItemList/ItemList';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
export default function Dashboard() {
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
