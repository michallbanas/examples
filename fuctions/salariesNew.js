'use strict';

const finances = {
    month: '',
    salary: NaN,
    pension: NaN,
    rent: NaN,
    loan: NaN,
    others: NaN,
    
    calculation(){
        const income = this.salary + this.pension
        const outcome = this.rent + this.loan + this.others
        const result = income - outcome
        console.log(`Your income: ${income}€, your outcome: ${outcome}€, you have ${result}€ for ${this.month}`)
        return result
    },

    foodExpenses: [],
    limit: NaN,
    weekDays: NaN,

    foodCalculation(){
        const perDay = this.foodExpenses
                            .map(num => num / this.weekDays) // Use map method to divide the expenses by the number of days in the month
                            .filter(num => num > this.limit) // Use filter method to filter the expenses that are greater than the limit
                            .reduce((a, b) => a + b, 0) // Use reduce method to sum the expenses
        console.log(`You crossed your limit about ${perDay}€ in total for ${this.month}`)
    }
} 

const january = {
    month: 'January',
    salary: 915,
    pension: 179,
    rent: 260,
    loan: 229,
    others: 26,
    foodExpenses: [44, 47, 66, 8],
    limit: 10,
    weekDays: 7
}

const february = {...january} // Use spread operator to shallow copy of the object 
february.month = 'February'
february.salary = 850

const { calculation } = finances // Use destructuring to get the calculation function from the finances object
const budget = calculation.call(january)

const { foodCalculation } = finances
const foodBudget = foodCalculation.call(january)
