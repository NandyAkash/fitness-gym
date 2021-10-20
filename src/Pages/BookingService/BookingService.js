import React from 'react';
import { useParams } from 'react-router';

const BookingService = () => {
    const {serviceID} = useParams();
    return (
        <div>
            <h1>Here You book number {serviceID} service</h1>
        </div>
    );
};

export default BookingService;