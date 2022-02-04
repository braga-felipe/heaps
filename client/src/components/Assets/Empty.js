import { useLottie } from 'lottie-react';
import empty from './empty.json';
export default function Cooking() {
  const options = {
    animationData: empty,
    loop: true,
    autoplay: true,
    style: {
      height: '95px',
      width: '95px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
