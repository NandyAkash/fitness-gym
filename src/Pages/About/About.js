import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container container">
            <div className="about-head">
                <h1>About Fitness GYM</h1>
                <h4>Whether you’re a first-time gym user or a veteran member, we’re here to provide a workout environment in which anyone - and everyone - can be comfortable.</h4>
            </div>
            <div className="about-body">
                <p>No matter what you’re looking for in a gym, we’ve got a membership option made for you. All Planet Fitness members enjoy unlimited access to their home club and the support of our friendly, knowledgeable staff anytime you need it. PF Black Card® members receive additional benefits, including the ability to bring a guest for free and access to any of our 2,000+ PF locations. Looking for a little extra guidance or inspiration to help you meet your fitness goals? As a PF member, you can take advantage of our free fitness training or find your motivation by reading real member experiences on Planet of Triumphs.
                It’s our goal to provide a clean, safe, welcoming environment for anyone who walks through our door, and all the equipment, amenities and support you need once you’re here.</p>
            </div>
        </div>
    );
};

export default About;