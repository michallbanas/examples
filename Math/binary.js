"use strict";

const binary = (text) => {
    const x = text.split('').map(char => char.charCodeAt(0).toString(2));
    return x.join(' ');
}

const vysledok = binary('tu')
console.log(vysledok)
