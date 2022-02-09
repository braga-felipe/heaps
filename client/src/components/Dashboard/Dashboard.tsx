import React from 'react';
import Cooking from '../Assets/Cooking';
import ItemList from '../ItemList/ItemList';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import Auth from '../Auth';
import Avatar from '../Assets/Avatar';
import { useSelector } from 'react-redux';
import { State } from '../../pages';

export default function Dashboard() {
  const user = useSelector((state: State) => state.user);

  return (
    <Auth>
      <Box sx={profileStyle()}>
        <Avatar avatar={user.img_url} />
      </Box>
      <Container>
        <Flex sx={{ justifyContent: 'center' }}>
          <Cooking />
        </Flex>
        <Box sx={mainStyle()}>
          <Heading sx={hStyle()}>Current Items</Heading>
          <Box sx={bStyle()} height='180px'>
            <ItemList
              complete={false}
              isOwner={true}
              buttonName='Chat'
              path='chatLobby'
            />
          </Box>
          <Heading sx={hStyle()}>Claimed Items</Heading>
          <Box sx={bStyle()} height='150px'>
            <ItemList
              complete={false}
              isOwner={false}
              buttonName='Chat'
              path='chatLobby'
            />
          </Box>
          <Heading sx={hStyle()}>Past Items</Heading>
          <Box sx={bStyle()} height='150px'>
            <ItemList
              complete={true}
              isOwner={false}
              buttonName='Chat'
              path='chatLobby'
            />
          </Box>
        </Box>
      </Container>
    </Auth>
  );
}
function mainStyle() {
  return {
    marginTop: '200px',
  };
}

function profileStyle() {
  return {
    position: 'absolute',
    marginLeft: '310px',
    zIndex: '1000',
  };
}
function bStyle() {
  return {
    width: '345px',
    overflowY: 'scroll',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
  };
}
function hStyle() {
  return {
    width: '190px',
    height: '22px',
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '5px',
  };
}
function cStyle() {
  return {
    width: '375px',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
    alignItems: 'center',
  };
}
// function cStyle() {
//   return {
//     marginTop: '10px',
//     width: '400px',
//     borderRadius: '15px',
//     border: '1px solid #E2E8F0',
//     alignItems: 'center',
//   };
// }
