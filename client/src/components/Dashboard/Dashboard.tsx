import React from 'react';
import ItemList from '../ItemList/ItemList';
import styles from '../../styles/Home.module.css';
import { State } from '../../pages/index';
import { Box, Container, Heading } from '@chakra-ui/react';
import ProfileIcon from '../Assets/ProfileIcon';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const user = useSelector((state: State) => state.user);
  return (
    <Container className={styles.container}>
      <Box align='right'>
        <ProfileIcon user={user} />
      </Box>
      <Container>
        <Heading sx={hStyles()}>Current List</Heading>
        <Box
          width='400px'
          borderRadius='15px'
          border='1px solid #E2E8F0'
          alignItems='center'>
          <ItemList complete={false} buttonName='Chat' path='chatLobby' />
        </Box>
        <Heading sx={hStyles()}>Past List</Heading>
        <Box
          width='400px'
          minHeight='80px'
          borderRadius='15px'
          border='1px solid #E2E8F0'
          alignItems='center'>
          <ItemList complete={true} buttonName='Chat' path='chatLobby' />
        </Box>
      </Container>
    </Container>
  );
}

function hStyles() {
  return {
    width: '129px',
    height: '22px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineSeight: '22px',
  };
}
