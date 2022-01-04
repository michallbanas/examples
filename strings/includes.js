'use strict';

const bus = 'Regio Bus N300';
console.log(bus.includes('N300'));
console.log(bus.startsWith('Regio'));
console.log(bus.endsWith('300'))

if (bus.startsWith('Regio') && bus.endsWith('N300')) {
    console.log('This is the newest type our bus, enjoy it 🥳');
}

// practical example

const checkBaggage = (items) => {
    const baggage = items.toLowerCase();

    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('OMG! You are not allowed to carry knives or guns to plane 👀');
    } else {
        console.log('Welcome to the plane and enjoy your flight 🥳');
    }
}

checkBaggage('Camera, Laptop, phone, Ball, socks');
checkBaggage('phone, shirt, Backpack, Knife, LEGO')