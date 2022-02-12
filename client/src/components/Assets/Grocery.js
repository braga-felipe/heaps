import { useLottie } from 'lottie-react';
import grocery from './grocery.json';
import foodBowl from './food-bowl.json';
export default function Groceries({ isGroceries }) {
  const options = {
    animationData: isGroceries ? grocery : foodBowl,
    loop: true,
    autoplay: true,
    style: {
      height: '200px',
      width: '375px',
      padding: '0px',
      marginTop: '5px',
      marginLeft: '0px',
    },
  };
  const { View } = useLottie(options);
  return View;
}
