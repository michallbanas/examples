'use strict';

const bookings = [];

const createBooking = (flightNumber, passengers = 1, price = 89 * passengers ) => {
    const booking = {
        flightNumber,
        passengers,
        price
    };
    
    console.log(booking);
    bookings.push(booking);
    
};

createBooking('TXL123');
createBooking('TXL123', 3);


