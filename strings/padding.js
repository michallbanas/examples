'use strict';

const message = 'Go to the gate 21!';
console.log(message.padStart(20, '+').padEnd(25,'+'));

// Masking credit card number

const maskCreditCard = (cardNumber) => {
    const str = cardNumber + ''; // convert to string
    const last = str.slice(-4); // get last 4 digits
    return last.padStart(str.length, '*'); 
}

const maskedCard = maskCreditCard('1234567890123456');
console.log(maskedCard);

// masking phone number

const fullNumber = '+421959624371'

const maskPhoneNumber = (phoneNumber) => {
    const str = phoneNumber + ''; // convert to string
    const last = str.slice(-5); // get last 5 digits
    return last.padStart(str.length, 'x');
}

const maskedPhoneNumber = maskPhoneNumber(fullNumber)

const user = {
    name: 'Reece James',
    age: 22,
    firstSquad: true,
    phoneNumber: maskedPhoneNumber
}

const [firstName, lastName] = user.name.split(' ');

console.log(user);
console.log(`Welcome back ${firstName}! We have to validate your identity. We will send you a code to ${maskedPhoneNumber}`);
console.log(`Show your full number: ${fullNumber}`);