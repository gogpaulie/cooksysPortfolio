import React, { useEffect, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import { darkTheme, lightTheme, ninetiesTheme } from './utils/themeFunctions';
import NavbarMobileDrawer from './components/NavbarMobileDrawer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { Projects } from './pages/Projects';
import ContactPage from './pages/ContactPage';
import './App.css';

const url = 'https://api.github.com/users/gogpaulie';

function App() {
  const [scrollActive, setScrollActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [githubData, setGithubData] = useState(null);

  const { theme } = useContext(ThemeContext);

  function handleScroll() {
    if (window.scrollY > 50) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }

  function handleResize() {
    if (window.innerWidth <= 990) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }

  function handleOpen() {
    setOpenNav(!openNav);
  }

  useEffect(() => {
    if (theme === 'dark') {
      darkTheme();
    }
    if (theme === 'light') {
      lightTheme();
    }
    if (theme === 'nineties') {
      ninetiesTheme();
    }

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setGithubData(data);
        } else {
          throw new Error('NETWORK RESPONSE ERROR');
        }
      } catch (error) {
        console.log('FETCH ERROR:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='App container'>
      <NavbarMobileDrawer open={openNav} handleOpen={handleOpen} />
      <Navbar
        scrollActive={scrollActive}
        isMobileView={isMobileView}
        handleOpen={handleOpen}
        open={openNav}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About githubData={githubData} />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
