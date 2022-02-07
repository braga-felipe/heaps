import { useLottie } from 'lottie-react';
import avatar from './avatar1.json';
export default function Cooking() {
  const options = {
    animationData: avatar,
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
