let n1 = 10;
let n2 = 7;
let n3 = 13;
let n4 = 20;

//make sure the sum of the number is 50

const sum = n1 + n2 + n3 + n4;
if (sum !== 50) {
    console.log("error: the sum of the numbers must be equal to 50.");
    return false;
}

// check at least two numbers are odd

let odd= 0;
if(n1 % 2 !==0) odd++;
if(n2 % 2 !==0) odd++;
if(n3 % 2 !==0) odd++;
if(n4 % 2 !==0) odd++;

if (oddCount < 2) {
    console.log("Error: At least two numbers must be odd.");
    return false;
}

// Check if all numbers are divisible by 5
const allDivisibleByFive = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log("numbers are divisible by 5");

const subtractResult = n2 - n1;
const multiplyResult = subtractResult * n3;
const remainderResult = multiplyResult % n4;
console.log("Arithmetic chain result:", remainderResult);

// any number is larger than or equal to 25

const isWithinRange = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
if (!isWithinRange) {
    console.log("Error: No number can be larger than or equal to 25.");
    return false;
    }
    {
    console.log("The numbers are valid!");
    return true;
}

