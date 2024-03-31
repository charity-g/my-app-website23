import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import { Button } from './Button';

/*
<li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
*/


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true)
    }
  } 

  useEffect(() => {
    showButton()
  }, []);
  
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Portfoilio 2024 &nbsp;<i class="fa-solid fa-cloud-showers-heavy"/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu-active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li> <Link to='/Surprise' className='nav-links' id='surprise' onClick={closeMobileMenu}>
                        Surprise Me
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar;

