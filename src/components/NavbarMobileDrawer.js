import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMobileDrawer = ({ open, handleOpen }) => {
  return (
    <div id='nav-mobile' className={open ? 'drawer open' : 'drawer'}>
      <ul className='drawer__list'>
        <li className='drawer__list--link'>
          <Link to='/' className='current' onClick={handleOpen}>
            Home
          </Link>
        </li>
        <li className='drawer__list--link'>
          <Link to='/about' className='current' onClick={handleOpen}>
            About
          </Link>
        </li>
        <li className='drawer__list--link'>
          <Link to='/projects' onClick={handleOpen}>
            Projects
          </Link>
        </li>
        <li className='drawer__list--link'>
          <Link to='/contact' onClick={handleOpen}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='drawer__social-media'>
        <a
          href='https://www.linkedin.com/in/paul-polihronakis-91999a30'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/gogpaulie' target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://twitter.com/Polihronakis'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-twitter'></i>
        </a>
      </div>
    </div>
  );
};

export default NavbarMobileDrawer;
