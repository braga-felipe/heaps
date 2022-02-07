import React from 'react';
import { useLottie } from 'lottie-react';
import avatar1 from '../Assets/avatar1.json';
import avatar2 from '../Assets/avatar2.json';
import avatar3 from '../Assets/avatar3.json';
import avatar4 from '../Assets/avatar4.json';

export default function Cooking({ avatar }) {

  function selectAvatar() {
    if (avatar === 'avatar1') {
      return avatar1;
    }
    if (avatar === 'avatar2') {
      return avatar2;
    }
    if (avatar === 'avatar3') {
      return avatar3;
    }
    if (avatar === 'avatar4') {
      return avatar4;
    }
  }

  const options = {
    animationData: selectAvatar(),
    loop: true,
    autoplay: true,
    style: {
      margin: '-2px -5px -8px -8px',
      height: '55px',
      width: '55px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
