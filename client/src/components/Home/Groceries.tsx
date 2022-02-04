import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import HomeList from './HomeList';

export default function Groceries() {
  return (
    <Box sx={bStyle()}>
      <HomeList isGroceries={true} buttonName='Chat' path='chatLobby' />
    </Box>
  );
}

function bStyle() {
  return {
    width: '400px',
    height: '500px',
    overflowY: 'scroll',
  };
}
