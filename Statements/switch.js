"use strict"

function slovakToEnglish(word) {
    switch (word) {
        case 'ahoj':
            return 'hello';
        case 'dobré ráno':
            return 'good morning';
        case 'dobrý večer':
            return 'good evening';
        default:
            return 'Toto slovo nie je v slovníku';
    }
}

console.log(slovakToEnglish('ahoj'));