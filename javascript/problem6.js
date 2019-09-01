'use strict';

/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem:
 The sum of the squares of the first ten natural numbers is,
 1^2 + 2^2 + ... + 10^2 = 385

 The square of the sum of the first ten natural numbers is,
 (1 + 2 + ... + 10)^2 = 55^2 = 3025

 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

 * https://projecteuler.net/problem=6
 */

let a = 325;
let b =  55;

for (let i = 11; i <= 100; i++) {
    a += i**2;
    b += i;
}

console.log((b**2) - a);