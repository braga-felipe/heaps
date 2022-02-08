import { useLottie } from 'lottie-react';
import map from './map.json';
export default function MapAnim() {
  const options = {
    animationData: map,
    loop: true,
    autoplay: true,
    style: {
      height: '300px',
      width: '360px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
