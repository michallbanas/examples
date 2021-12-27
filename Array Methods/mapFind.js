"use strict";

const employees = {
    "deliveryTeam": [
        {
            "name": "John",
            "job": "developer"
        },
        {
            "name": "Jane",
            "job": "designer"
        }
    ]
}

const search = employees.deliveryTeam.map(person => person.name); // returns array of names
const find = employees.deliveryTeam.find(person => person.job === 'designer') // returns object of designer
console.log(search); // ['John', 'Jane']
console.log(find); // {name: 'Jane', job: 'designer'}