"use strict"

const dates = [8, 3, 6, 1, 2, 9, 4, 7, 5];

dates.sort(); 
console.log(dates);

const names = ["John", "Paul", "George", "Ringo", "Pete", "Stuart"];

names.sort();
console.log(names);

const salaries = [
    { name: "John", salary: 1000 },
    { name: "Paul", salary: 2000 },
    { name: "George", salary: 1500 },
    { name: "Ringo", salary: 850 },
]

salaries.sort((a, b) => a.salary - b.salary);
console.log(salaries[0].name);