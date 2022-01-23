"use strict"

function palindrome(veta){

    
    const malePismena = veta.toLowerCase().replaceAll(' ', '')
    const malePismenaReverse = malePismena.split(' ').reverse().join('') // reverse the string

    if (malePismena === malePismenaReverse) {

        const spravne = `"${veta}" je palindrom`
        return spravne

    } else {

        const nespravne = `"${veta}" nie je palindrom`
        return nespravne

    }
}

const vysledok = palindrome("Jelenovi pivo nelej")

console.log(vysledok)