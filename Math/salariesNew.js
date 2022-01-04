'use strict';

const finances = {
    month: '',
    vyplata: NaN,
    dochodok: NaN,
    najom: NaN,
    splatka: NaN,
    
    calculation(){
        const income = this.vyplata + this.dochodok
        const outcome = this.najom + this.splatka
        const result = income - outcome
        console.log(`Your income: ${income}€, your outcome: ${outcome}€, you have ${result}€ for ${this.month}`)
        return result
    }
} 

const january = {
    month: 'January',
    vyplata: 930,
    dochodok: 175,
    najom: 260,
    splatka: 229
}

const february = {...january}
february.month = 'February'
february.vyplata = 850

const calc = finances.calculation

// calc.call(january)

const rozpocet = calc.call(january)
console.log(rozpocet)