import { useLottie } from 'lottie-react';
import spacewalk from './spacesuit-dashboard.json';

const Spacewalk = () => {
  const spacewalkString = JSON.stringify(spacewalk);

  const options = {
    animationData: JSON.parse(spacewalkString),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Spacewalk;
