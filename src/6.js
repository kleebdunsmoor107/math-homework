function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateMathHomework(problems) {
  const results = [];
  for (let i = 0; i < problems; i++) {
    const type = getRandomNumber(3);
    switch (type) {
      case 0:
        results.push({
          problem: `What is the value of x in the equation ${getRandomNumber(10)} + ${getRandomNumber(10)} = ${getRandomNumber(20)}`,
          solution: `${getRandomNumber(10)} + ${getRandomNumber(10)} = ${getRandomNumber(20)}`
        });
        break;
      case 1:
        results.push({
          problem: `What is the value of x in the equation ${getRandomNumber(10)} - ${getRandomNumber(10)} = ${getRandomNumber(20)}`,
          solution: `${getRandomNumber(10)} - ${getRandomNumber(10)} = ${getRandomNumber(20)}`
        });
        break;
      case 2:
        results.push({
          problem: `What is the value of x in the equation ${getRandomNumber(10)} x ${getRandomNumber(10)} = ${getRandomNumber(20)}`,
          solution: `${getRandomNumber(10)} x ${getRandomNumber(10)} = ${getRandomNumber(20)}`
        });
        break;
    }
  }
  return results;
}
