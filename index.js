import { sumFromTo, getAverage, sort } from "./components/list-calculator.js";
import getRandomNumbers from "./components/get-random-numbers.js";

// const numberList = [5, 10, 15, 20];

const count = 5;
const randomNumbers = getRandomNumbers(count);
console.log("randomNumbers:", randomNumbers);

var minNumber = Math.min(...randomNumbers);
var maxNumber = Math.max(...randomNumbers);

const start = minNumber;
const end = maxNumber;
const resultSumFromTo = sumFromTo(start, end);
console.log(`${start} to ${end} = ${resultSumFromTo}`);

const resultGetAverage = getAverage(randomNumbers);
console.log(`result : ${resultGetAverage}`);

const sortedList = sort(randomNumbers);
console.log(`sortedList :${sortedList}`);
