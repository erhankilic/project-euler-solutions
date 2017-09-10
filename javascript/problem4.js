'use strict';

/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem: A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 * https://projecteuler.net/problem=4
 */

/**
 * Checks number if palindrome or not!
 * @param number
 */
function check_if_palindrome(number) {
    var is_palindrome = true,
        array = (""+number).split(""),
        array2 = (""+number).split(""),
        array2_count = array2.length - 1;

    for (var i = 0; i < array2_count; i++) {
        if (array[i] !== array2[array2_count - i]) {
            is_palindrome = false;
        }
    }

    return is_palindrome;
}

var value = 0;
for (var i = 100; i < 1000; i++) {
    for (var k = 100; k < 1000; k++) {
        var result = k * i;
        if (check_if_palindrome(result) && result > value) {
            value = result;
        }
    }
}

console.log(value);