"use strict";

// 1. Arrays

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

// Nested

const nested = [1, 2,[3, 4]]
const [a, ,[c, d]] = nested;
console.log(a, c, d);

// 2. Objects

// Simple example

const person = {
    fName: 'John',
    surname: 'Doe',
    skills: {
        programming: 'JavaScript',
    }
}

// Old way

console.log(person.fName, person.surname, person.skills.programming);

// ES6 destructuring way

const {fName, surname, skills: {programming}} = person;
console.log(fName, surname, programming);


