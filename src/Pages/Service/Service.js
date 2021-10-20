import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    console.log(props)
    const {id, name, picture, duration, price} = props.data;
    return (
        <div className='card-details'>
                    <Card style={{ }}>
                        <Card.Img className='card-img' variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {duration}
                            </Card.Text>
                            <p>Price: {price}</p>
                            <Link to={`/booking/${id}`}>
                                <Button variant="primary">Get the Service</Button>
                            </Link>
                        </Card.Body>
                    </Card>
        </div>
        
    );
};

export default Service;