"use strict";

const firstName = 'Michal';

function calcAge(birthYear) {
    const age = 2021 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age} years old, born in ${birthYear}.`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1991) {
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);
        }
    }
    printAge();
    return age;
}

calcAge(1991);