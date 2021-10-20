import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width:'100%', height: '600px'}} src="https://i.ibb.co/SvTKr0K/3828537.jpg" alt="" />
            <Link to='/'><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;