const mathHomework = {
  solveEquation(a, b, c) {
    // solve the quadratic equation ax^2 + bx + c = 0
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) return [];
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  },
  getPermutations(inputArray) {
    // return all permutations of the input array
    if (inputArray.length === 0) return [];
    const permutations = [];
    for (let i = 0; i < inputArray.length; i++) {
      const remainingInput = inputArray.slice(0, i).concat(inputArray.slice(i + 1));
      for (const perm of mathHomework.getPermutations(remainingInput)) {
        permutations.push([inputArray[i]].concat(perm));
      }
    }
    return permutations;
  },
};
