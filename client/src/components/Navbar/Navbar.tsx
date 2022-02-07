import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HStack, Container } from '@chakra-ui/react';
import { useLogoutMutation } from '../../generated/graphql';
import { State } from '../../pages';
import { useDispatch, useSelector } from 'react-redux';
import { logUserOut } from '../../redux/actions/user';
export default function Navbar() {
  // set a toggle state to control render of login/logout button
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // import user from store and useDispatch to dispatch actions
  const user = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  // import graphql logout hook
  const [, logOutUser] = useLogoutMutation();

  // function to be called in logout button
  const logout = () => {
    // call graphQL hook to erase session id
    logOutUser();
    // change the state of user in store
    dispatch(logUserOut());
    // set toggle button to false
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // on change of user state page re-renders?
    user && user?.email ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

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
        {/* if toggle state is true, render logout icon, else render login icon */}
        {isLoggedIn ? (
          <Container
            onClick={() => {
              logout();
            }}>
            <Image src='/logout.png' width='30px' height='30px' />
          </Container>
        ) : (
          <Link href='/login'>
            <Container>
              <Image src='/login.png' width='30px' height='30px' />
            </Container>
          </Link>
        )}
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
    paddingTop: '2%',
  };
}
function cStyle() {
  return {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
  };
}
