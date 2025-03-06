
const solveMathHomework = () => {
  let problemNum = Math.floor(Math.random() * 5 + 1); // Generate a random number between 1 and 5

  switch (problemNum) {
    case 1:
      return "What is the value of x in the equation 2x + 5 = 11?";
    case 2:
      return "Find the value of c in the equation y = mx + c, where m = 2 and y = 8.";
    case 3:
      return "Solve for a in the equation x^2 + bx + c = 0, where b = 3 and c = -4.";
    case 4:
      return "What is the value of f(x) = x^3 - 9x^2 + 17x - 8 in the point x = 2?";
    case 5:
      return "Find the equation of the line that passes through the points (2,3) and (-1,-4).";
    default:
      return "Invalid problem number.";
  }
};

solveMathHomework();