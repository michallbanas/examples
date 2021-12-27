"use strict";

const restaurant = {
    name: 'Balans Bistro',
    location: 'Jozefská, Bratislava',
    categories: ['Vegan', 'Vegetarian', 'Gluten-free'],

    mainMenu: ['Goulash', 'Bowl', 'Ravioli'],
    burgers: ['Mexico', 'Green', 'Balans'],

    openingHours: {
        monThu: {
            open: '11:00',
            close: '14:30'
        },
        fri: {
            open: '11:00',
            close: '19:00'
        },
        satSun: {
            open: '12:00',
            close: '19:00'
        }
    },

    orderDelivery: function({burgersIndex, mainMenuIndex, time, adress}) {
        return(`Yay! Order received. ${this.burgers[burgersIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${adress} in ${time} minutes`);
    }
}

// Order delivery

const order = restaurant.orderDelivery({
    time: '30',
    adress: 'Trencianska',
    burgersIndex: 0,
    mainMenuIndex: 1
})

console.log(order);

// for of loop and destructuring

const menu = [...restaurant.mainMenu, ...restaurant.burgers]; // spread operator
// console.log(menu); // ['Goulash', 'Bowl', 'Ravioli', 'Mexico', 'Green', 'Balans']

for (const [item, element] of menu.entries()) { // for of loop + destructuring + entries()
    console.log(`${item + 1}: ${element}`);
}