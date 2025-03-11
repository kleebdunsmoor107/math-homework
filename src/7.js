
function solveMathHomework(mathProblem) {
  const solution = mathProblem.split(' ');
  let variableA = +solution[0];
  let variableB = +solution[2];
  if (solution[1] === '+') {
    return variableA + variableB;
  } else if (solution[1] === '-') {
    return variableA - variableB;
  } else if (solution[1] === '*') {
    return variableA * variableB;
  } else if (solution[1] === '/') {
    if (variableB !== 0) {
      return variableA / variableB;
    } else {
      return 'Error: cannot divide by zero';
    }
  } else {
    return `Unsupported operation: ${solution[1]}`;
  }
}