let n1 = 10;
let n2 = 7;
let n3 = 13;
let n4 = 20;

//make sure the sum of the number is 50

// const sum = n1 + n2 + n3 + n4;
// if (sum !== 50) {
//     console.log("error: the sum of the numbers must be equal to 50.");
//     return false;
// }

// check at least two numbers are odd

// let odd= 0;
// if(n1 % 2 !==0) odd++;
// if(n2 % 2 !==0) odd++;
// if(n3 % 2 !==0) odd++;
// if(n4 % 2 !==0) odd++;

// if (oddCount < 2) {
//     console.log("Error: At least two numbers must be odd.");
//     return false;
// }

// Check if all numbers are divisible by 5
// const allDivisibleByFive = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
// console.log("numbers are divisible by 5");

// const subtractResult = n2 - n1;
// const multiplyResult = subtractResult * n3;
// const remainderResult = multiplyResult % n4;
// console.log("Arithmetic chain result:", remainderResult);

// any number is larger than or equal to 25

// const isWithinRange = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
// if (!isWithinRange) {
//     console.log("Error: No number can be larger than or equal to 25.");
//     return false;
//     }
//     {
//     console.log("The numbers are valid!");
//     return true;
// }

//PART 2
// **********************************
// **********************************

const fuelConsumption = {
    "55 mph": 30,
    "60 mph": 28,
    "75 mph": 23
}

const fuelNeeded = totalDistance / fuelConsumption[`${averageSpeed} mph`];
const fuelCost = fuelNeeded * fuelCostPerGallon;

// Trip Duration
const tripDuration = totalDistance / averageSpeed;

// Results
console.log(`Traveling at an average of ${averageSpeed}:`);
console.log(`Fuel needed: ${fuelNeeded.toFixed(2)} gallons`);
console.log(`Fuel cost: $${fuelCost.toFixed(2)}`);
console.log(`Trip duration: ${tripDuration.toFixed(2)} hours`);
console.log(fuelCost <= FUEL_BUDGET
    ? "Your budget will be enough to cover the fuel expense."
    : "Your budget will not be enough to cover the fuel expense."
);
console.log("---");


// Calculate and log the results for each speed
calculateTripDetails("55");
calculateTripDetails("60");
calculateTripDetails("75");
