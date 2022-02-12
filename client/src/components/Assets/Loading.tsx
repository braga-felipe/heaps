import { useLottie } from 'lottie-react';
import loading from './loading.json';
export default function Loading() {
  const options = {
    animationData: loading,
    loop: true,
    autoplay: true,
    style: {
      margin: '0px',
      height: '250px',
      width: '350px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
