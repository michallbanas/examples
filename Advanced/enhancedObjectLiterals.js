"use strict";

const openingHours = {
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
};

const restaurant = {
    name: 'Balans Bistro',

    mainMenu: ['Goulash', 'Bowl', 'Ravioli'],
    burgers: ['Mexico', 'Green', 'Balans'],

    openingHours, // shorthand notation

    orderDelivery ({burgersIndex, mainMenuIndex, time, adress}) { // instead of orderDeliver: function ...
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