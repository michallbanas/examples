'use strict';

const airlines = {
    airline: '',
    code: '',
    bookings: [],

    book(flightNumber, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.code}${flightNumber}`);
        this.bookings.push({flight: `${this.code}${flightNumber}`, name})
    }
}

const ryanair = {
    airline: 'Ryanair',
    code: 'RY',
    bookings: []
}

const wizzair = {
    airline: 'Wizzair',
    code: 'WZ',
    bookings: []
}

const book = airlines.book

// call method 

book.call(ryanair, '1234', 'Mason Mount')
book.call(wizzair, '5567', 'Reece James')

const flightData = ['9086', 'Romelu Lukaku']
book.call(ryanair, ...flightData)

// bind method

const bookRY = book.bind(ryanair)
const bookWZ = book.bind(wizzair)

bookRY('0081', 'Steven Gerrad')
bookWZ('3283', 'Petr Cech')

console.log(ryanair)
console.log(wizzair)