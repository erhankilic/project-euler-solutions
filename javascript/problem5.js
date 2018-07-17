'use strict';

/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem: 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

 * https://projecteuler.net/problem=5
 */

var number = 20;
var isFound = false;
var checkList = [11, 13, 14, 16, 17, 18, 19, 20];

while (!isFound) {
    var divided = true;
    for (let check of checkList) {
        if (number % check != 0) {
            divided = false;
            break;
        }
    }
    if (divided) {
        isFound = true;
        console.log("Number is " + number);
        break;
    } else {
        number+=20;
    }
}