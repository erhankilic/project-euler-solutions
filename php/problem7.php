<?php
/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem:

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10001st prime number?

 * https://projecteuler.net/problem=7
 */

$primeNumbers = [3];
$nth = 2;
$testNumber = 3;
$lastPrimeNumber = null;

while ($nth < 10001) {
    $testNumber += 2;
    $isPrimeNumber = true;
    $divison = $testNumber / 2;

    foreach ($primeNumbers as $primeNumber) {
        if ($primeNumber > $divison) {
            break;
        }
        if ($testNumber % $primeNumber === 0) {
            $isPrimeNumber = false;
            break;
        }
        $divison = $testNumber / $primeNumber;
    }

    if ($isPrimeNumber) {
        $primeNumbers[] = $testNumber;
        $lastPrimeNumber = $testNumber;
        $nth++;
    }
}

echo $lastPrimeNumber;