import {sumFromTo , getAverage , sort } from "./list-calculator.js";
import getRandomNumbers from "./get-random-numbers.js"

const numberList = [5, 10, 15, 20];

const start = 5;
const end = 10;
const resultSumFromTo = sumFromTo(start, end);
console.log(`${start} to ${end} = ${resultSumFromTo}`);


const resultGetAverage = getAverage(numberList);
console.log(`result : ${resultGetAverage}`);

// const numberListArry = [5, 10, 15, 20];
const sortedList = sort(numberList);
console.log(`sortedList :${sortedList}`);

const count = 5;
const randomNumbers = getRandomNumbers(count);
console.log("randomNumbers:", randomNumbers);