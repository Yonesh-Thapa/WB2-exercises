//calculating the vans required for x people. 
// how much will the vans cost
//what is the cost per person when you split it.

"use strict";

const numPeople = 38;
const numVans = Math.ceil(numPeople / 15);
const rentalCost = numVans * 250;
const costPerPerson = rentalCost / numPeople;

console.log(`You need ${numVans} vans to transport ${numPeople} people.`);
console.log(`The cost to rent the vans is $${rentalCost}.`);
console.log(`The cost per person is $${costPerPerson.toFixed(2)}.`);
