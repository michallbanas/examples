"use strict";

const restaurant = {
    name: 'Balans Bistro',
    location: 'Jozefská, Bratislava',
    categories: ['Vegan', 'Vegetarian', 'Gluten-free'],

    mainMenu: ['Goulash', 'Bowl', 'Ravioli'],
    burgers: ['Mexico', 'Green', 'Balans', 'Nachos'],

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

    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}

// 1. Destructuring

// REST pattern

const [Mexico, , Balans, ...otherFood] = [...restaurant.burgers, ...restaurant.mainMenu];
console.log(Mexico, Balans, otherFood);

// Objects

const { satSun, ...wekDays } = restaurant.openingHours;
console.log(wekDays);

// 2. Functions

const add = function(...numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) 
        sum += numbers[i];
        console.log(sum); 
}

add(2,6,8);
add(4,1,9,8,2)

const x = [26, 11, 3]
add(...x);
console.log(x);

restaurant.orderPizza('cheese', 'tomato', 'onion', 'olives');