'use strict';

const sentence = 'JavaScript is the best programming language in the world'

const replace = (str) => {
    return str.replace('JavaScript', 'C++');
}

const upper = (str) => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = (str, fn) => {
    console.log(`Transformed string: ${fn(str)}`)
}

transformer(sentence, upper)
transformer(sentence, replace)