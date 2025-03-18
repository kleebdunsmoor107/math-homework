function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function getSumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

const myNumbers = [getRandomNumber(), getRandomNumber()];
const sum = getSumOfTwoNumbers(...myNumbers);
console.log(sum);
