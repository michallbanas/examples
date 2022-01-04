'use strict';

// convert textArea to camelCase and add emoji to the end

const textArea = 'underscore_case \n    first_name \n Some_Variable \n  calculate_AGE \n delayed_departure';
const textAreaArray = textArea.split('\n'); // output: ['underscore_case', 'first_name', 'Some_Variable', 'calculate_AGE', 'delayed_departure']

for (const [i, text] of textAreaArray.entries()) { 
    const [firstRow, secondRow] = text.toLowerCase().trim().split('_'); // output: ['underscore', 'case']
    const output = `${firstRow}${secondRow.replace(secondRow[0], secondRow[0].toUpperCase())}`; // output 'underscoreCase'
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`); // output: 'underscoreCase  ✅'
}
