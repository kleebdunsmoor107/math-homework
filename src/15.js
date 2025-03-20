const getRandomMathProblem = () => {
  const operations = ['+', '-', '*', '/'];
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  return `${num1} ${operation} ${num2}`;
};
