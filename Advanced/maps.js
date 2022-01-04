'use strict';

const question = new Map([
    ['question', 'What is the best language for coding in the world?'],
    [1, 'C++'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', '3'],
    [true, 'Correct!'],
    [false, 'Wrong!']
])

console.log('question:', question.get('question'));

for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}