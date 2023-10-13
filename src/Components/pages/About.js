import '../../App.css';
import React from 'react';
import './About.css';

function About() {
    return (
        <> 
            <h1>Hi! My name is Charity.</h1>
            <h2 className='subtitle'>Welcome to my profile!</h2>
            <div className='img_container'>
                <img src="https://media.licdn.com/dms/image/D5603AQHQV-LcZ3dLrg/profile-displayphoto-shrink_200_200/0/1675913502976?e=1702512000&v=beta&t=K02LE7G92rE-sLZADiUSBc6E8sMAtQlzX8n-2azRVgA" alt='photo of Charity'></img>
            </div>
            <p className='description'>
            I'm a current full-time student studying Computer Science and Biology. I have an interest in pursuing meaningful work that impacts other people for the better through education, mentoring, medical technology and database software. Much of my schooling, past work and extracurricular experiences have inspired me to realize the power of cross-discipline collaboration and work. Being people oriented at work has and continues to really inspire myself in self-improvement and continuous learning.
            </p>
            <p className='description'>
            I am currently open to internships for Summer 2024 and beyond. 
            </p>
        </>
    )
}

export default About;