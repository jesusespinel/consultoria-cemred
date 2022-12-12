import React, { useEffect, useState } from 'react';
import './Header.css'

// import components
//import Logo from '../assets/img/logo.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';
import cemredLogo from '../assets/img/cemredlogo.png'

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className="flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 bg-primary h-16"
    >
      <div className='container mx-auto h-16 flex items-center justify-between bg-primary fixed top-0  z-10 '>
        {/* logo */}
        
        <a href='#'>
          <div className='container-cemred'>
          
          <img className='cemred' src={cemredLogo} alt=''  />
         <h2 className='text'>CEMRED</h2>
          
          
          
          </div>
          
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
