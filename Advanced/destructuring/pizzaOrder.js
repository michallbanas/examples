"use strict";

const restaurant = {
    name: 'Balans Bistro',
    location: 'Jozefská, Bratislava',

    orderPizza: function(ing1, ing2, ing3){
        return(`Here is your amazing pizza with ${ing1}, ${ing2} and ${ing3}`);
    }
}

// Pizza

 const ingredients = [
    prompt("Let's make your pizza! Ingredient 1?"),
    prompt("Ingredient 2?"),
    prompt("Ingredient 3?")
]

const pizza = restaurant.orderPizza(...ingredients);
console.log(pizza); 