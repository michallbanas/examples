'use strict';

const sutaziaci = [{
    meno: 'Michal Banaš',
    id: 'bnx1205'
},
{
    meno: 'Lýdia Lukasová',
    id: 'llx8971'
}]

const filtrovatPodlaId = sutaziaci.map(vyfiltruj => vyfiltruj.id)
console.log(filtrovatPodlaId)

const vlozitUdaje = 'bx5'
const rozdelitNaZnaky = vlozitUdaje.split('')
console.log(rozdelitNaZnaky)


const vysledok = filtrovatPodlaId.filter(jednoId => rozdelitNaZnaky.every(znak => jednoId.includes(znak)))
console.log(vysledok)