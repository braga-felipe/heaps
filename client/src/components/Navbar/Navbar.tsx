import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heading, HStack, VStack } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <HStack sx={hsStyle()}>
      <Heading size='md'></Heading>
      <HStack sx={cStyle()}>
        <Link href='/'>
          <Image src='/home.png' width='25px' height='25px' />
        </Link>
        <Link href='/createItem'>
          <Image src='/food.png' width='30px' height='30px' />
        </Link>
        <Link href='/dashboard'>
          <Image src='/dashboard.png' width='30px' height='30px' />
        </Link>
        <Link href='/chatLobby'>
          <Image src='/chat.png' width='30px' height='30px' />
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
