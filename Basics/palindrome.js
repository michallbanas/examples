"use strict"

function palindrome(slovo){

    const valid = /[\W_]/g // regex to remove non-alphanumeric characters
    const malePismena = slovo.toLowerCase().replace(valid, '') // remove non-alphanumeric characters and convert to lowercase
    const malePismenaReverse = malePismena.split('').reverse().join('') // reverse the string

    if (malePismena === malePismenaReverse) {

        const spravne = `"${slovo}" je palindrom`
        return spravne

    } else {

        const nespravne = `"${slovo}" nie je palindrom`
        return nespravne

    }
}

const vysledok = palindrome("Jelenovi pivo nelej")

console.log(vysledok)