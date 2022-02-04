import { useLottie } from 'lottie-react';
import cooking from './cooking.json';
export default function Cooking() {
  const options = {
    animationData: cooking,
    loop: true,
    autoplay: true,
    style: {
      height: '175px',
      width: '175px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
