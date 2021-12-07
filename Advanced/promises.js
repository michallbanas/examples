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
