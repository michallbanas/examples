'use strict';

let a = 2
let b = -6
let c = -8

let d = Math.pow(b, 2) - (4 * a * c)
console.log(d)

let first = (-(b) + Math.sqrt(d)) / (2 * a)
console.log(first)

let second = (-(b) - Math.sqrt(d)) / (2 * a)
console.log(second)