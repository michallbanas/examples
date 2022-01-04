'use strict';

// Year: 2021

const salaries = [530, 700, 650, 900, 1150, 950, 1000, 1080, 720, 530, 295, 95]
const sumSalaries = salaries.reduce((acc, cur) => acc + cur)

const averageSalary = () => {
    const average = Math.round(sumSalaries / salaries.length)
    console.log(average)
}

const perDay = () => {
    const averagePerDay = Math.round(sumSalaries / 365)
    console.log(averagePerDay)
}

averageSalary()
perDay()

// Year: 2022

const expectedSalary = [850, 850, 850, 850, 850, 850, 1000, 1000, 1000, 1000, 1000, 1000]
const sumExpectedSalary = expectedSalary.reduce((acc, cur) => acc + cur)
const dochodok = 180 * 12
const splatka = 230 * 12
const najom = 260 * 12

const finalSalary = (sumExpectedSalary - najom) + (dochodok - splatka)
console.log(finalSalary / 12)

