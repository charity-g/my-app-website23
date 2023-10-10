import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/bird.mp4' autoPlay loop muted non-repeat ></video>
            <div className='hero-text'>
            <p>Hi! My name is Charity.</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--' path='/about'>ABOUT ME</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--' path='/projects'>MY PROJECTS</Button>
            </div>
            </div>
        </div>
    )
}

export default HeroSection;
