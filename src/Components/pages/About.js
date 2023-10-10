import '../../App.css';
import React from 'react';
import image from './IMG_CharityGrey.jpg'


function About() {
    return (
        <> 
            <img src='https://www.w3schools.com/images/w3schools_green.jpg'></img>
            <img src={require('./IMG_CharityGrey.jpg')}></img>
            <h1>Hi! My name is Charity.</h1>
        </>
    )
}

export default About;