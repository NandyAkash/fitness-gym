import React from 'react';
import { Carousel } from 'react-bootstrap';
import About from '../About/About';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/3pRgG3L/105999935-1562097549646sport-stretching-leisure-hobby-woman-strong-exercise-workout-gym-weightliftin.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/pfm8grG/maxresdefault.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/ZYjC8n2/images.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;