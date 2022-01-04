'use strict';

const priceEU = '182,60€';
const priceUS = priceEU.replace('€', '$').replace(',', '.');

console.log(priceUS);

const announcement = 'The new iPhone 11 is available in the US. The Price in US: 182.60$';
// const repair = announcement.replace('Asia', 'Europe'); // only first occurence
const fullRepair = announcement.replaceAll('US', 'Europe').replace('$', '€'); // all occurences

console.log(fullRepair);