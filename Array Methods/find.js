"use strict";

// Find nájde prvú hodnotu v poli, ktorá zodpovedá podmienke.

const salaries = [530, 700, 650, 900, 1150, 950, 1000, 1080]
const highSalary = salaries.find(high => high > 600) // v tomto prípade 700
console.log(highSalary)