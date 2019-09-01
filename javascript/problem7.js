'use strict';

/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem:

 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10 001st prime number?

 * https://projecteuler.net/problem=6
 */

let primeNumbers = [3];
let nth = 2;
let testNumber = 3;
let lastPrimeNumber = null;

while (nth < 10001) {
    testNumber += 2;
    let isPrimeNumber = true;
    let divison = testNumber / 2;

    for (let primeNumber of primeNumbers) {
        if (primeNumber > divison) {
            break;
        }
        if (testNumber % primeNumber === 0) {
            isPrimeNumber = false;
            break;
        }
        divison = testNumber / primeNumber;
    }

    if (isPrimeNumber) {
        primeNumbers.push(testNumber);
        lastPrimeNumber = testNumber;
        nth++;
    }
}

console.log(lastPrimeNumber);