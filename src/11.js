function getRandomMathProblem() {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return getRandomMathProblem();
      } else {
        result = num1 / num2;
      }
      break;
  }
  return `${num1} ${operator} ${num2} = ${result}`;
}
