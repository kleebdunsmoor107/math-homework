function multiplyNumbers(a, b) {
  return a * b;
}

function addNumbers(a, b) {
  return a + b;
}

function calculate(operation, numbers1, numbers2) {
  switch (operation) {
    case "multiply":
      return multiplyNumbers(numbers1[0], numbers2[0]);
    case "add":
      return addNumbers(numbers1[0], numbers2[0]);
    default:
      throw new Error("Unsupported operation");
  }
}

// Example usage
const result = calculate("multiply", [1, 2], [3, 4]);
console.log(result);
