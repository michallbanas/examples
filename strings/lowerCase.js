'use strict';

// repair passenger name

const passenger = 'bAnaΕ‘'

const passengerRepair = passenger.toLowerCase()
const passengerCorrect = passengerRepair[0].toUpperCase() + passengerRepair.slice(1)

console.log(passengerCorrect);

// comparing emails

const email = 'banas@tester.it'
const loging = '    BANAS@tester.IT  \n'

const normalizeLoging = loging.toLowerCase().trim()

console.log(normalizeLoging);
console.log(email === normalizeLoging);

// as a function

const comparingEmail = (email, loging) => {
    const normalizeLoging = loging.toLowerCase().trim()

    // optional chaining

   // email === normalizeLoging ? console.log('You are logged in π') : console.log('You are not logged in π’'); // ? = if, : = else

    // if else way

    if (email === normalizeLoging){
        console.log('You are logged in π');
    }
    else {
        console.log('You are not logged in π’');
    } 
}

const result = comparingEmail('banas@tester.it', '    BANAS@tester.IT  \n' );