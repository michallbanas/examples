'use strict';

const vypocetNajmu = (byvanie, energie) => {
   const promise = new Promise((resolve, reject) => {
       const najom = byvanie * 12 + energie * 12
       byvanie > 0 && energie > 0 ? resolve(najom)
       : reject('Please enter a number')
    });
    return promise;
};

const vysledok = async () => {
    try {
        const najom = await vypocetNajmu(400, 120)
        const naOsobu = najom / 2;
        const naDen = Math.round(najom / 365);

        console.log(`Spolu zaplatia za rok ${najom}€. Na osobu teda ${naOsobu}€ a na deň ${naDen}€`)
        
    } catch (message) {
        console.log(message)
    }
}

vysledok()

