import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleSwitch = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  return (
    <div className='theme-switcher'>
      <label className='theme-switcher__label'>
        <input type='checkbox' onChange={() => themeToggler()} />
        <div className='theme-switcher__label--slider round'></div>
      </label>
      <span className='theme-switcher__toggle-icon'>
        {theme === 'light' ? (
          <i className='fas fa-sun'></i>
        ) : (
          <i className='fas fa-moon'></i>
        )}
      </span>
    </div>
  );
};

export default ThemeToggleSwitch;
