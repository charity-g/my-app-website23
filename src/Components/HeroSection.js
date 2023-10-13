import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    
    return (
        <div className='hero-container'>
        <iframe src="https://www.youtube.com/embed/NviS7xPGOxc?si=RdtuFugIfkNvD2FG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
