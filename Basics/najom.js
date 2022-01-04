"use strict";

const vypocetNajmu = (byvanie, energie) => {
    const byvanieDokopy = byvanie * 12
    console.log(byvanieDokopy)

    const energieDokopy = energie * 12
    console.log(energieDokopy)

    const vsetkoDokopy = byvanieDokopy + energieDokopy
    console.log(vsetkoDokopy)

    return vsetkoDokopy
}

const najom = vypocetNajmu(400, 120);

const naOsobu = najom / 2;
const naDen = Math.round(najom / 365);

console.log(`Spolu zaplatia za rok ${najom}€. Na osobu teda ${naOsobu}€ a na deň ${naDen}€`);  