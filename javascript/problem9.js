'use strict';

/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem:

 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 a2 + b2 = c2

 For example, 32 + 42 = 9 + 16 = 25 = 52.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.

 * https://projecteuler.net/problem=9
 */

let found = false;
for (let i = 1; i <= 997 && !found; i++) {
    let jLimit = 1000 - i;
    for (let j = i +1; j <= jLimit && !found; j++) {
        let kLimit = 1000 - (i + j);
        for (let k = j +1; k <= kLimit && !found; k++) {
            if ((i + j+ k === 1000) && ((i * i) + (j * j) === k * k)) {
                found = true;
                console.log(i * j * k);
                break;
            }
        }
    }
}