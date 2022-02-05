import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { State } from '../pages';
export default function Auth({ children }) {
  const router = useRouter();
  //take user from store
  const user = useSelector((state: State) => state.user);
  console.log('USER IN AUTH: ', user);

  // create auth-status to be checked
  const [userAuthed, setUserAuthed] = useState(false);

  // function that checkes if there's a valid user in store and sets auth-status to true or false
  function isLoggedIn() {
    console.log('USER IN AUTH CHECK: ', user);
    // TODO: needs to have a more secure check
    if (Object.keys(user).length) {
      console.log('userAuthed INSIDE BEFORE set: ', userAuthed);
      setUserAuthed(true);
      console.log('userAuthed INSIDE AFTER set: ', userAuthed);
    } else {
      console.log('userAuthed BEFORE set: ', userAuthed);
      setUserAuthed(false);
      console.log('userAuthed AFTER set: ', userAuthed);
    }
  }

  function goToLogin() {
    return router.push('/login');
  }

  useEffect(() => {
    isLoggedIn();
    userAuthed ? console.log('User logged in') : goToLogin();
  }, []);

  return userAuthed ? <>{children}</> : <>Not logged in</>;
}
