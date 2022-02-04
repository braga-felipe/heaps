import { useLottie } from 'lottie-react';
import cooking from './cooking-better.json';
export default function Cooking() {
  const options = {
    animationData: cooking,
    loop: true,
    autoplay: true,
    style: {
      height: '225px',
      width: '225px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
