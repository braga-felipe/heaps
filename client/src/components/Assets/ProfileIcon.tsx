import React from 'react';
import { Container, Avatar } from '@chakra-ui/react';
export default function ProfileIcon({ user }) {
  return (
    <Container margin='2px'>
      <Avatar
        backgroundColor='#DFB23F'
        src={user?.img_url || '/user.png'}
        alt='profile'
      />
    </Container>
  );
}
