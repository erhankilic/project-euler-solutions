<?php
/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem:

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

 * https://projecteuler.net/problem=10
 */

$primeNumbers = [3];
$testNumber = 3;
$total = 5;

while ($testNumber < 2000000) {
    $testNumber += 2;
    $isPrimeNumber = true;
    $divison = sqrt($testNumber);

    foreach ($primeNumbers as $primeNumber) {
        if ($primeNumber > $divison) {
            break;
        }
        if ($testNumber % $primeNumber === 0) {
            $isPrimeNumber = false;
            break;
        }
    }

    if ($isPrimeNumber) {
        $primeNumbers[] = $testNumber;
        $total += $testNumber;
    }
}

echo $total;