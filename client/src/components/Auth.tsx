import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { State } from '../pages';

export default function Auth({ children }) {
  const user = useSelector((state: State) => state.user);
  const router = useRouter();

  function isLoggedIn() {
    return Object.keys(user).length ? true : false;
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login');
    }
  }, []);
  return isLoggedIn() ? children : <>Checking authorization...</>;
}
