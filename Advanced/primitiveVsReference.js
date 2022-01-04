"use strict";

// Primitive types

let lastName = 'Hlavnová';
let oldName = lastName;
lastName = 'Banašová';
console.log('Priezvisko: ' + lastName, ' Staré Priezvisko: ' + oldName); // Priezvisko: Hlavnová Staré Priezvisko: Hlavnová

// Reference types

const simona = {
    firstName: 'Simona',
    lastName: 'Hlavnová',
    age: 50
};

const marriedSimona = simona;
marriedSimona.lastName = 'Banašová';
console.log('Before marriage: ', simona);
console.log('After marriage: ', marriedSimona); // zmena v oboch objektoch pretože su rovnakou referenciou 

// Copying objects

const lydia = {
    firstName: 'Lydia',
    lastName: 'Lukasová',
    age: 36,
}

const marriedLydia =  Object.assign({}, lydia); // Object.assign() - copy object
marriedLydia.lastName = 'Banašová';

console.log('Before marriage: ', lydia);
console.log('After marriage: ', marriedLydia); 
