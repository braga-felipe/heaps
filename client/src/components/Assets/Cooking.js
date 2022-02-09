import { useLottie } from 'lottie-react';
import cooking from './cooking-better.json';
export default function Cooking() {
  const options = {
    animationData: cooking,
    loop: true,
    autoplay: true,
    style: {
      position: 'absolute',
      margin: '0px',
      height: '200px',
      width: '400px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
