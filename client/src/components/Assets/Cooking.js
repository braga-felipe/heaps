import { useLottie } from 'lottie-react';
import cooking from './cooking.json';
export default function Cooking() {
  const options = {
    animationData: cooking,
    loop: true,
    autoplay: true,
    style: {
      height: '250px',
      width: '250px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
