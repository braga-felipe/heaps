
import React from 'react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  HStack,
} from '@chakra-ui/react'


export default function Navibar() {
  return (
    <HStack sx={hsStyle()}>
      <Heading size='md'>Heaps</Heading>
      <HStack sx={cStyle()}>
        <Link href='/'>Home</Link>
        <Link href='/createItem'>Post Food</Link>
        <Link href='/dashboard'>My History</Link>
        <Link href='/login'>Login</Link>
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

