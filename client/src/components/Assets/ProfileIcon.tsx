import React from 'react';
import { useRouter } from 'next/router';

import { Container, Avatar, Link } from '@chakra-ui/react';
export default function ProfileIcon({ user }) {
  const router = useRouter();
  function showPageLinked() {
    router.push('/profile/' + `${user.id}`);
  }
  return (
    <Link onClick={showPageLinked}>
      <Container margin='2px'>
        <Avatar
          backgroundColor='#DFB23F'
          src={user?.img_url || '/user.png'}
          alt='profile'
        />
      </Container>
    </Link>
  );
}
