'use strict';

/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem: The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 * https://projecteuler.net/problem=3
 */

var number = 600851475143, prime_number = 2;

function find_next_prime_number() {
    var can_divide = false;
    var n = 2;
    if (prime_number === 2) {
        prime_number++;
    } else {
        prime_number += 2;
    }
    while (n < prime_number) {
        if (prime_number % n === 0) {
            can_divide = true;
        }
        n++;
    }
    if (can_divide) {
        find_next_prime_number();
    }
}

while (number > 1) {
    if (number % prime_number === 0) {
        number /= prime_number;
    } else {
        find_next_prime_number();
    }
}
console.log(prime_number);