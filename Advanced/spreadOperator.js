"use strict";

// Examples with numbers

const arr = [6, 7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2], arr[3]]; // Old way
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // Spread operator
console.log(newArr);

console.log(...newArr); // Spread operator individual elements

// examples with strings

const bistro = {
    name: "Bistro",
    employees: ["John", "Jane", "Jack"],
    owners: ["Luke", "Leia",]
}

const newEmployees = ["Mary", "Molly", ...bistro.employees];
console.log(newEmployees);

// Copy array

const copyEmployees = [...bistro.employees];
console.log(copyEmployees);

// Join 2 arrays

const people = [...bistro.employees, ...bistro.owners];
console.log(people); 

// + real world example in destructing/example.js