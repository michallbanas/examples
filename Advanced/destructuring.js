"use strict";

// Old way

const mena = ['John', 'Jane', 'Mary'];
const prveMeno = mena[0];
const druheMeno = mena[1];
const tretieMeno = mena[2];

console.log(prveMeno, druheMeno, tretieMeno);

// New way = destructuring ES6

const [firstName, secondName, lastName] = ['John', 'Jane', 'Mary'];
console.log(firstName, secondName, lastName);

// Swap - old way

let city = 'Bratislava';
let hometown = 'Kosice';

let temp = city;
city = hometown;
hometown = temp;

console.log(city, hometown);

// Swap - new way

let currentYear = 2020;
let birthYear = 1990;

[currentYear, birthYear] = [birthYear, currentYear];
console.log(currentYear, birthYear);