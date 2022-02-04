import React from 'react';
import ItemList from '../ItemList/ItemList';
import styles from '../../styles/Home.module.css';
import { State } from '../../pages/index';
import { Box, Container, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const user = useSelector((state: State) => state.user);
  return (
    <Container sx={cStyle()}>
      <Heading sx={hStyle()}>Current List</Heading>
      <Box sx={bStyle()}>
        <ItemList complete={false} buttonName='Chat' path='chatLobby' />
      </Box>
      <Heading sx={hStyle()}>Past List</Heading>
      <Box sx={bStyle()}>
        <ItemList complete={true} buttonName='Chat' path='chatLobby' />
      </Box>
    </Container>
  );
}
function bStyle() {
  return {
    width: '400px',
    height: '300px',
    overflowY: 'scroll',
  };
}
function hStyle() {
  return {
    width: '129px',
    height: '22px',
    fontWeight: 'bold',
    fontSize: '18px',
  };
}

function cStyle() {
  return {
    marginTop: '10px',
    width: '400px',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
    alignItems: 'center',
  };
}
