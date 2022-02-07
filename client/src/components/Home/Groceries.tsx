import { Box } from '@chakra-ui/react';
import React from 'react';
import HomeList from './HomeList';

export default function Groceries() {
  return (
    <Box sx={bStyle()} marginLeft='-10px'>
      <HomeList isGroceries={true} buttonName='Chat' path='chatLobby' />
    </Box>
  );
}

function bStyle() {
  return {
    width: '345px',
    marginLeft: '-2px',
    minHeight: '80px',
    maxHeight: '500px',
    overflowY: 'scroll',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
  };
}
