'use strict';

import 'core-js/actual/array/group-by.js';

// groupBy method - experimental version, it doesnt work without core-js

const employees = [
    {name: 'Michal', position: 'Tester', salary: 1300},
    {name: 'Lydia', position: 'Developer', salary: 1800},
    {name: 'Kasia', position: 'Developer', salary: 1200},
]

const groupEmployees = employees.groupBy(employee => employee.position);
console.log(groupEmployees);

// reduce method

const reduceEmployees = employees.reduce((group, employee) => {
    const { position } = employee;
    group[position] = group[position] || [];
    group[position].push(employee);
    return group;
}, {});

console.log(reduceEmployees);

const array = [1, 2, 3];
const array2 = ['Michal', 'Lydia', 'Kasia'];
const array3 = ['Tester', 'Developer', 'Developer'];

 
// merge array, array2 and array3 to the objects where first value of the array belongs to first value of the array2 and so on
// objects have keys number, name and position

const mergeArray = array.map((num, index) => ({
    number: num,
    name: array2[index],
    position: array3[index]
})
)

console.log(mergeArray);
