import React from 'react';
import { useLottie } from 'lottie-react';
import spacewalk from './spacesuit-dashboard.json';

const Spacewalk = () => {
  const options = {
    animationData: spacewalk,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Spacewalk;
