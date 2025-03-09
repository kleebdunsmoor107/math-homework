function solveEquation(a, b, c) {
  if (b ** 2 - 4 * a * c < 0) {
    return "No real solutions.";
  } else if (b ** 2 - 4 * a * c === 0) {
    return "One solution: " + (-b / (2 * a));
  } else {
    return "Two solutions: " + ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)) + ", " + ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a));
  }
}
