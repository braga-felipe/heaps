import { Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <Container sx={cStyle()}>
      <Navbar />
      <main>{props.children}</main>
    </Container>
  );
  function cStyle() {
    return {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      paddingLeft: '0',
      paddingRight: '0',
    };
  }
}
