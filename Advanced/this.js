"use strict";

const days = 20;

const john = {
    salary: 1100,
    calcSalary: function() {
        const result = this.salary / days; // this.salary = michal.salary
        console.log(result); 

        const salaryHeight = () => {
            if (this.salary > 1000) {
                console.log("Better than before");
            }
        }
        salaryHeight()
    },
}; 

john.calcSalary();

const melanie = {
    salary: 1200,
};

melanie.calcSalary = john.calcSalary; // borowing value of function
melanie.calcSalary();