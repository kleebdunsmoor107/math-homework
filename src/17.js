function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function isEven(n) {
  if (!Number.isInteger(n)) throw new Error('n must be an integer');
  return n % 2 === 0;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}
