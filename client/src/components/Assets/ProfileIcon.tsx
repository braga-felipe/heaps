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
      <Avatar
        sx={style()}
        backgroundColor='#DFB23F'
        src={user?.img_url}
        alt='profile'
      />
    </Link>
  );
}

function style() {
  return {
    margin: '5px 0 0 0',
    height: '35px',
    width: '35px',
  };
}
