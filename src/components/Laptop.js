import { useLottie } from 'lottie-react';
import laptop from './laptop.json';

const Laptop = () => {
  const laptopString = JSON.stringify(laptop);

  const options = {
    animationData: JSON.parse(laptopString),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Laptop;
