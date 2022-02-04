import { useLottie } from 'lottie-react';
import complete from './complete.json';
export default function Complete() {
  const options = {
    animationData: complete,
    loop: true,
    autoplay: true,
    style: {
      height: '300px',
      width: '300px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
