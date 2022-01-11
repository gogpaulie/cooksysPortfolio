import React, { useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const container = useRef(null);
  const laptop = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./spacesuit-dashboard.json'),
    });
    animate.setSpeed(0.5);
    Lottie.loadAnimation({
      container: laptop.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./laptop.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className={`Hero patterns patterns__${theme}`}>
      <div className='Hero__animation'>
        <div className='Hero__animation--container'>
          <div
            ref={container}
            style={{ display: theme === 'dark' ? 'block' : 'none' }}
          ></div>
          <div
            ref={laptop}
            style={{ display: theme === 'light' ? 'block' : 'none' }}
          ></div>
        </div>
      </div>
      <div className='Hero__heading'>
        <h1 className={`Hero__heading--name ${theme}`}>Hello. I’m Paul</h1>
        <p className='Hero__heading--desc'>
          I have a passion for developing user-friendly, accessible and
          responsive websites. I never stop learning and for me, each new
          project is another adventure.{' '}
        </p>
        <div className='hero-button-wrapper'>
          <a
            className='cta-btn cta-btn--hero'
            href='https://docs.google.com/document/d/1OVq9JyOmqz863NrB5558d1-JSxAif0O-/view'
            target='_blank'
            rel='noreferrer'
          >
            View Resume <span>&rarr;</span>
          </a>
          <Link
            className='cta-btn cta-btn--hero'
            to='/projects'
            rel='noreferrer'
          >
            See Work <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
