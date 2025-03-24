function calculateSum(array) {
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

console.log(calculateSum([1, 2, 3, 4])); // Output: 10
