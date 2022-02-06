import { useLottie } from 'lottie-react';
import mysticPan from './mysticPan.json';
export default function MysticPan() {
  const options = {
    animationData: mysticPan,
    loop: true,
    autoplay: true,
    style: {
      height: '190px',
      width: '480px',
      padding: '0',
      marginLeft: '-73px',
      marginBottom: '10px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
