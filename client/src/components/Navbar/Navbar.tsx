
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react';



export default function Navbar() {
  return (
    <HStack sx={hsStyle()}>
      <Heading size='md'></Heading>
      <HStack sx={cStyle()}>
        <Link href='/'>
          <VStack>
            <Image src='/home.png' width='25px' height='25px' />
          </VStack>
        </Link>
        <Link href='/createItem'>
          <VStack>
            <Image src='/food.png' width='30px' height='30px' />
          </VStack>
        </Link>
        <VStack>
          <Image src='/dashboard.png' width='30px' height='30px' />
        </VStack>
        <Link href='/chatLobby'>
          <VStack>
            <Image src='/chat.png' width='30px' height='30px' />
          </VStack>
        </Link>
      </HStack>
    </HStack>
  );
}

function hsStyle() {
  return {
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#dfb23f',
    color: 'white',
  }
}
function cStyle() {
  return {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold'
  }
}

