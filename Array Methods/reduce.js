"use strict";

const salaries = [530, 700, 650, 900, 1150, 950, 1000, 1080];
const sum = salaries.reduce((acc, cur) => acc + cur);
console.log(sum);
