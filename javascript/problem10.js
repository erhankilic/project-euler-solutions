'use strict';

/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem:

 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.

 * https://projecteuler.net/problem=10
 */

let primeNumbers = [3];
let testNumber = 3;
let total = 5;

while (testNumber < 2000000) {
    testNumber += 2;
    let isPrimeNumber = true;
    let divison = Math.sqrt(testNumber);

    for (let primeNumber of primeNumbers) {
        if (primeNumber > divison) {
            break;
        }
        if (testNumber % primeNumber === 0) {
            isPrimeNumber = false;
            break;
        }
    }

    if (isPrimeNumber) {
        primeNumbers.push(testNumber);
        total += testNumber;
    }
}

console.log(total);