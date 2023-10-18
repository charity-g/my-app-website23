import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for checking out my website!
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='https://github.com/charity-g/my-app-website23'>GitHub for this website</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link 
            to='https://www.linkedin.com/in/charity-g'>LinkedIn  &nbsp;
            <i class='fab fa-linkedin' /></Link>
            <Link 
            to='https://github.com/charity-g'>LinkedIn  &nbsp;
            <i class='fab fa-github' /></Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
               Portfoilio 2023 &nbsp;<i class="fa-solid fa-cloud-showers-heavy"/>
            </Link>
          </div>
          <small class='website-rights'>Charity Grey © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;