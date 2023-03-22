const printPrimes = require('../printPrimes');

describe('printPrimes function', () => {
  test('should print an array of primes', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    printPrimes();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});