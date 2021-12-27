"use strict";

const goals = new Set (['Mount', 'Lukaku', 'Mount', 'Chilwell', 'James', 'James']);

console.log(goals);
console.log(goals.size);
console.log(goals.has('Mount'));
console.log(goals.has('Werner'));

goals.add('Pulisic');
goals.delete('James');

console.log(goals);

// Create set from array

const plWinners = ['Chelsea', 'Manchester City', 'Manchester City', 'Liverpool', 'Liverpool'];
const plWinnersUnique = [...new Set(plWinners)];
console.log(plWinnersUnique);
