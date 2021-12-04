"use strict";

// Math
const mojeČíslo = Math.round(6.2) // Round metóda zaokrúhli číslo
const mojeČíslo1 = Math.floor(6.2) // Floor metóda zaokrúhli číslo nadol
const mojeČíslo2 = Math.ceil(6.2) // Ceil metóda zaokrúhli číslo nahor
const mojeČíslo3 = Math.pow(2, 3) // Pow metóda = v tomto prípade dva na tretiu
const mojeČíslo4 = Math.sqrt(64) // SQRT metóda odmocnina
const mojeČíslo5 = Math.abs(-7) // Absolútna hodnota daného čísla
 
console.log(mojeČíslo4)

const výplaty = [530, 700, 650, 900, 1150, 950, 1000, 1080, 720]
const najvyššiaVýplata = Math.max(...výplaty)
const najnižšiaVýplata = Math.min(...výplaty)

console.log(najvyššiaVýplata)
console.log(najnižšiaVýplata)