const getRandomNumbers = (count) => {
  const randomNumbers = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 201) - 100;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
};

export default getRandomNumbers;
