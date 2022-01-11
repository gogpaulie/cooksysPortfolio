import React from 'react';
import { useLottie } from 'lottie-react';
import laptop from './laptop.json';

const Laptop = () => {
  const options = {
    animationData: laptop,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Laptop;
