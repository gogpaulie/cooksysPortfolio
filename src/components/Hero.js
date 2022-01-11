import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Spacewalk from './Spacewalk';
import Laptop from './Laptop';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`Hero patterns patterns__${theme}`}>
      <div className='Hero__animation'>
        <div className='Hero__animation--container'>
          {theme === 'dark' ? <Spacewalk /> : <Laptop />}
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
