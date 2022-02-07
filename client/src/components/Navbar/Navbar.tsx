import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { State } from '../../pages/index';
import { HStack, Container } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  // const user = useSelector((state: State) => state.user);
  // console.log({ user });
  // function isLoggedIn() {
  //   return Object.keys(user).length ? true : false;
  // }
  return (
    <HStack sx={hsStyle()}>
      <HStack sx={cStyle()}>
        <Link href='/'>
          <Container>
            <Image src='/home.png' width='25px' height='25px' />
          </Container>
        </Link>
        <Link href={'/createItem'}>
          <Container>
            <Image src='/food.png' width='30px' height='30px' />
          </Container>
        </Link>
        <Link href={'/dashboard'}>
          <Container>
            <Image src='/dashboard.png' width='30px' height='30px' />
          </Container>
        </Link>
        <Link href={'/chatLobby'}>
          <Container>
            <Image src='/chat.png' width='30px' height='30px' />
          </Container>
        </Link>
        <Link href='/login'>
          <Container>
            <Image src='/logout.png' width='30px' height='30px' />
          </Container>
        </Link>
      </HStack>
    </HStack>
  );
}

function hsStyle() {
  return {
    display: 'flex-box',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    background: '#dfb23f',
    color: 'white',
  };
}
function cStyle() {
  return {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
  };
}
