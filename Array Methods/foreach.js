"use strict";

// Names

const names = ["Alice", "Bob", "Charlie"];

names.forEach(name => console.log(name + " is a great name!"));

// Numbers

const numbers = [1100, 1150, 900, 1050];
const days = 20;

numbers.forEach(number => {
    console.log(number / days +"$ per day");
})

const pohyby = [600, -350, 1100, -500]

const pohybyNaUcte = pohyby.forEach((pohyb, index) => {
    if (pohyb > 0) {
        console.log(`Pohyb č.${index + 1}: Pribudlo ti na účet: ${pohyb}€`);
    } else {
        console.log(`Pohyb č.${index + 1}: Ubudlo ti z účtu: ${pohyb}€`);
    }
})
