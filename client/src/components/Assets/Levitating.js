import { useLottie } from 'lottie-react';
import levitating from './levitating.json';
export default function Levitating() {
  const options = {
    animationData: levitating,
    loop: true,
    autoplay: true,
    style: {
      margin: '-20px',
      height: '250px',
      width: '350px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
