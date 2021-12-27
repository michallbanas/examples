"use strict";

const restaurant = {
    name: 'Balans Bistro',

    mainMenu: ['Goulash', 'Bowl', 'Ravioli'],
    burgers: ['Mexico', 'Green', 'Balans'],

    openingHours: {
        thu: {
            open: '11:00',
            close: '14:30'
        },
        fri: {
            open: '11:00',
            close: '19:00'
        },
        sat: {
            open: '12:00',
            close: '19:00'
        }
    }
}

// Example

console.log(restaurant.openingHours.mon?.open) // ? - optional chaining - if the property exists, then it will be printed, otherwise it will be undefined
console.log(restaurant.openingHours.fri?.open)

// Example 2

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for (const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed' // ?? - if the property exists, then it will be printed, otherwise it will be 'closed'
    console.log(`${day} is ${open}`)
}

const users =[]

console.log(users[0]?.name ?? 'Array is empty') // ?? - if the property exists, then it will be printed, otherwise it will be 'Array is empty'