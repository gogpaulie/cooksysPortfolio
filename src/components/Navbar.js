import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoTransparent.png';
import logoBlack from '../assets/logoTransparent-black.png';
import logoWebp from '../assets/logoTransparent.webp';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ scrollActive, isMobileView, open, handleOpen }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <header>
      <nav className={scrollActive ? `nav active ${theme}` : 'nav'}>
        <div className='container'>
          <div className='nav__logo'>
            <Link to='/'>
              {theme === 'dark' ? (
                <picture>
                  <source type='image/webp' srcSet={logoWebp} />
                  <source type='image/jpeg' srcSet={logo} />
                  <img src={logo} alt='logo' />
                </picture>
              ) : theme === 'light' ? (
                <picture>
                  {/* <source type='image/webp' srcSet={logoWebp} /> */}
                  <source type='image/jpeg' srcSet={logoBlack} />
                  <img src={logoBlack} alt='logo' />
                </picture>
              ) : null}
            </Link>
          </div>
          <ThemeToggleSwitch />
          {isMobileView ? (
            <i
              className={`fas fa-${open ? 'times' : 'bars'}`}
              onClick={handleOpen}
            ></i>
          ) : (
            <ul className={`${theme}`}>
              <li>
                <Link className={`${theme}`} to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className={`${theme}`} to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link className={`${theme}`} to='/projects'>
                  Projects
                </Link>
              </li>

              <li>
                <Link className={`${theme}`} to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
