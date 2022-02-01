'use strict';

class Account {
    locale = 'en-US';
    #movements = [];
    #pin;

    constructor(name, currency, pin) {
        this.name = name;
        this.currency = currency;
        this.#pin = pin;
        console.log(`Hi ${this.name}, your account has been created.`);
    }

    deposit(value) {
        this.#movements.push(value);
        return this;
    }

    withdraw(value) {
        this.deposit(-value);
        return this;
    }
}

const account1 = new Account('Michal Banas', 'EUR', 1234);



class customerInfo extends Account {
    id;
    #email;
    #phone;

    constructor(name, currency, pin, email, phone, id) {
        super(name,currency,pin);
        this.#email = email;
        this.#phone = phone;
        this.id = id;
    }
}

const michalBanas = new customerInfo('Michal Banas', 'EUR', 1234, 'skuska@email.com', '+48123456789', 'de8955');
michalBanas.deposit(100).deposit(200).deposit(300).withdraw(50).withdraw(10);
console.log(michalBanas);
