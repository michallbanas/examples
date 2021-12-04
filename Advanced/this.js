"use strict";

const days = 20;

const john = {
    salary: 1100,
    calcAge: function() {
        const result = this.salary / days; // this.salary = michal.salary
        console.log(result); 
    },
};

john.calcAge();

const melanie = {
    salary: 1200,
};

melanie.calcAge = john.calcAge; // borowing value of function
melanie.calcAge();