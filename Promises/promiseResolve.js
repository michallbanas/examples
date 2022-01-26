'use strict';

const vypocetNajmu = (byvanie, energie) => {
    const promise = new Promise((resolve, reject) => {
        if (byvanie > 0 && energie > 0) {
            const byvanieDokopy = byvanie * 12
            const energieDokopy = energie * 12
            const vsetkoDokopy = byvanieDokopy + energieDokopy
            resolve(vsetkoDokopy)
            } else {
            reject('Please enter a number')
        }
    });
            return promise;
};

const najom = vypocetNajmu(400, 120)
                .then((najom) => {
                    const naOsobu = najom / 2;
                    const naDen = Math.round(najom / 365);

                    console.log(`Spolu zaplatia za rok ${najom}€. Na osobu teda ${naOsobu}€ a na deň ${naDen}€`)
            })
                .catch((message) => {
                    console.log(message)
}); 






