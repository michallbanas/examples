"use strict";

function platbaZa(polozka){
    const pocetMesiacov = 12
    console.log(polozka)
    return polozka * pocetMesiacov;
}

function vypocetNajmu(byvanie, energie){
    const byvanieDokopy = platbaZa(byvanie)
    console.log(byvanieDokopy)

    const energieDokopy = platbaZa(energie)
    console.log(energieDokopy)

    const vsetkoDokopy = byvanieDokopy + energieDokopy
    console.log(vsetkoDokopy)

    return vsetkoDokopy
}

const najom = vypocetNajmu(400, 120);

const naOsobu = najom / 2;
const naDen = Math.round(najom / 365);

console.log(`Michal a Lýdia spolu zaplatia za rok ${najom}€. Na osobu teda ${naOsobu}€ a na deň ${naDen}€`);
