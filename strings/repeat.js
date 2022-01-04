'use strict';

const message = 'Bad weather, flights delayed 🌧 ';   
console.log(message.repeat(3));

const planeInLines = (numberOfFlights) => {
    console.log(`There are ${numberOfFlights} flights delayed ${'✈️'.repeat(numberOfFlights)}`);
}

planeInLines(3);
planeInLines(5);