'use strict';

const expenses = [45, 72, 30, 89, 50]
const limit = 10

const perDay = expenses.map(num => num / 7).filter(num => num > limit).reduce((a, b) => a + b, 0)

console.log(`You crossed your limit about ${perDay}€ in total`)