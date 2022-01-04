'use strict';

const airline = 'Tap Air Portugal';
const plane = 'A320'

console.log(plane[1]); // second (1) letter or number of the string // 3
console.log(airline.length); // length of string // 16
console.log(airline.indexOf('Air')); // 4
console.log(airline.indexOf('A'));  
console.log(airline.lastIndexOf('a'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' '))); 
console.log(airline.slice(airline.lastIndexOf(' ') +1 )) 
console.log(airline.slice(-2)) 
console.log(airline.slice(1, -2))

// real example

const checkMiddleSeat = (seat) => {
    const s = seat.slice(-1); // get last character
    if (s === 'B' || s === 'E')
        console.log('You got the middle seat 😣 ');
    else console.log('You are lucky 😎 ');
}

checkMiddleSeat('11B');
checkMiddleSeat('12A');

