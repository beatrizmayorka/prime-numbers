function printPrimes() {
  const primes = [];

  for (let i = 2; i < 1000; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }

  console.log(primes);
}

module.exports = printPrimes;