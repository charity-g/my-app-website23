import { useState } from 'react';
import React from 'react';
import './Navbar.css';
import { Button } from './Button';
import { useEffect } from 'react';


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
            <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
            Portfoilio 2023 &nbsp;<i class="fa-solid fa-cloud-showers-heavy"/>
            </a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu-active':'nav-menu'}>
                <li className='nav-item'>
                    <a href='/' className='nav-links' onclick={closeMobileMenu}>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='/projects' className='nav-links' onclick={closeMobileMenu}>Projects</a>
                </li>
                <li className='nav-item'>
                    <a href='/about' className='nav-links-mobile' onclick={closeMobileMenu}>About</a>
                </li>
            </ul>
            {button && <Button style='btn--outline' path='/surprise'>SURPRISE ME</Button>}
        </div>
    </nav>
    </>
  );
}

export default Navbar;
