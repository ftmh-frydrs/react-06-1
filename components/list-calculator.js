export const sumFromTo = (start, end) => {
  if (start > end) {
    [start, end] = [end, start];
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

export const getAverage = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = sum / numbers.length;
  return average;
};

export const sort = (numbers) => {
  const sortedList = numbers.slice().sort((a, b) => b - a);
  return sortedList;
};

export default sumFromTo;
