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
    },

    orderPizza: function(ing1, ing2, ing3){
        return(`Here is your amazing pizza with ${ing1}, ${ing2} and ${ing3}`);
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

// Pizza

const ingredients = [
    prompt("Let's make your pizza! Ingredient 1?"),
    prompt("Ingredient 2?"),
    prompt("Ingredient 3?")
]

const pizza = restaurant.orderPizza(...ingredients);
console.log(pizza);


