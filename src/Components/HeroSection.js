import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import hero_image from './2023_hero_image.png' // relative path to image 

function HeroSection() {
    
    return (
        <div className='hero-container'>
        <img src={hero_image} alt="Image could not be loaded"/>
        
        <div className='hero-text'>
            <p>Hi! My name is Charity.</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--' path='/projects'>MY PROJECTS</Button>
            </div>
            <div className='hero-description'>
                <p>Computer Science and Biology @ UBC.</p>
                <p id='paragraph'>I love problem-solving in very diverse areas-
                 medical technology, bioinformatics, as well as all things related to managing data-
                  databases, data collection, data processing + cleaning and data visualization/analysis.
                </p>
            </div>
        </div>
        </div>
    )
}

export default HeroSection;

// <img src='/images/test.png' alt="no image D:"/>
// <iframe src="https://www.youtube.com/embed/NviS7xPGOxc?si=RdtuFugIfkNvD2FG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--' path='/about'>ABOUT ME</Button>