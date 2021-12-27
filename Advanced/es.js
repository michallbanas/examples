"use strict";

// ES12 - ECMAScript 12 (2021)

// numeric separator

const myNumber = 150_000; // 150.000
console.log(myNumber);

// replace all

const sentence = 'The quick brown fox jumps over the lazy dog. The dog was brown and white.';
const newSentence = sentence.replaceAll('dog', 'cat'); // Replace alle dog's in the sentence with cat's
console.log(newSentence);

// ES11 - ECMAScript 11 (2020)

//

const user = {
    name: 'Michal',
    age: 30,
    city: 'Bratislava'
};

console.log(Object.keys(user)); // returns array of keys // ['name', 'age', 'city']
console.log(Object.values(user)); // returns array of values // ['Michal', 30, 'Bratislava']
console.log(Object.entries(user)); // returns array of arrays // [['name', 'Michal'], ['age', 30], ['city', 'Bratislava']]

//