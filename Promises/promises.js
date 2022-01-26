"use strict";

const firstPromise = new Promise((resolve, reject) => {
    let connection = 1 + 1 // väčšinou sa používa napr. API databázy
    if(connection === 2){
        resolve("úspešné")
    } else {
        reject("neúspešné")
    }
})

firstPromise
    .then((message) => {
        console.log("Pripojenie bolo ", message)
})
    .catch((message) => {
        console.log("Pripojenie bolo ", message)
    })

const serials = ['The Witcher', 'The Walking Dead', 'The Last of Us', 'Big Bang Theory', 'The Sopranos', 'The Vampire Diaries']

function getSerials () {
    return new Promise((resolve, reject) => {
        if(serials.length > 0){
            resolve(serials)
        } else {
            reject('Serial nenájdený')
        }
    })
}

async function findSerial (serial) {
    try {
        const serials = await getSerials()
        const found = serials.some((item) => item === serial)
        console.log(found)
        
    } catch(message) {
        console.log(message)
    }
}

const find = findSerial('Friends')


