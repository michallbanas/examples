'use strict';

// 1.

/* const myName = 'Michal Banas';

const initials = myName
                .toLowerCase()
                .split(' ')
                .map(name => name.at(0))
                .join('');

console.log(initials); */

// 2.

const account1 = {
    owner: 'Michal Banas',
    pin: '', 
    movements: [915, -10, -220, 180, -30]
};

const account2 = {
    owner: 'Lydia Lukas',
    pin: '',
    movements: [400, -19, -260, 630, -24]
};

const accounts = [account1, account2];

const ownerID = (acc) => {
    acc.forEach((id) => {
        id.userID = id.owner
                    .toLowerCase()
                    .split(' ')
                    .map(name => name.at(0))
                    .join('')

        id.pin = id.pin + Math.floor(1000 + Math.random() * 9000)
    });
};

const deposits = (acc) => {
    acc.forEach((owner) => {
        owner.deposits = owner.movements.filter(movement => movement > 0)
    });
};

const withdraws = (acc) => {
    acc.forEach((owner) => {
        owner.withdraws = owner.movements.filter(movement => movement < 0)
    });
};

const balance = (acc) => {
    acc.forEach((owner) => {
        owner.balance = owner.movements.reduce((a, b) => a + b, 0);
    });
};


ownerID(accounts);
deposits(accounts);
withdraws(accounts);
balance(accounts);


console.log(accounts);

const value = '300€'
const [newValue, ...rest] = value.split('€')
console.log(newValue);