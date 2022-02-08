import { useLottie } from 'lottie-react';
import lobby from './lobby.json';
export default function Lobby() {
  const options = {
    animationData: lobby,
    loop: true,
    autoplay: true,
    style: {
      position: 'absolute',
      height: '400px',
      width: '350px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
