"use strict";

const restaurant = {
    nameOf: 'Balans Bistro',
    location: 'Jozefská, Bratislava',
    categories: ['Vegan', 'Vegetarian', 'Gluten-free'],
    mainMenu: ['Goulash', 'Bowl', 'Ravioli'],
    burgers: ['Mexico', 'Green', 'Balans'],
    openingHours: {
        thu: {
            open: '10:00',
            close: '22:00'
        },
        fri: {
            open: '10:00',
            close: '23:00'
        },
        sat: {
            open: '11:00',
            close: '23:00'
        }
    },

    order: function (burgersIndex, mainMenuIndex) {
        return [this.burgers[burgersIndex], this.mainMenu[mainMenuIndex]]; // keď zavolám funkciu, tak číslo vyberie, ktorý burger/jedlo zo zoznamu chcem
    },

    orderDelivery: function({burgersIndex, mainMenuIndex, time, adress}) {
        console.log(`Order received! ${this.burgers[burgersIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${adress} in ${time} minutes`);
    }
}

// orders

console.log(restaurant.order(0, 1));

const objednavka = restaurant.order(0, 1);
console.log(objednavka);

// Receive 2 return values from a function

const [streetka, minutky] = restaurant.order(2,0);
console.log(streetka, minutky)

// Order delivery

restaurant.orderDelivery({
    time: '30',
    adress: 'Trencianska',
    burgersIndex: 0,
    mainMenuIndex: 1
})

// basic examples

const {nameOf, location, openingHours} = restaurant; // Destructuring object
console.log(nameOf, location, openingHours);

const {burgers: streetFood, mainMenu: meals} = restaurant; // Renaming properties
console.log(streetFood, meals);

const {fri} = openingHours;
console.log(fri);

const {fri: f} = openingHours;
console.log(f);

// Objects

const newRestaurant = { foundedIn: 2016}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.nameOf = 'Foodstock'
console.log(restaurantCopy.nameOf);
console.log(restaurant.nameOf);