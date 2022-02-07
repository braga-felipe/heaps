import { useLottie } from 'lottie-react';
import createCooking from './create-cooking.json';
export default function CreateCooking() {
  const options = {
    animationData: createCooking,
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
