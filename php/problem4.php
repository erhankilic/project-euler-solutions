<?php
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
 *
 * @param $number
 * @return bool
 */
function check_if_palindrome($number)
{
    $is_palindrome = true;
    $array  = array_map('intval', str_split($number));
    $array2  = array_map('intval', str_split($number));
    $array2_count = count($array2) - 1;
    foreach ($array as $index => $item) {
        if ($item !== $array2[$array2_count - $index]) {
            $is_palindrome = false;
        }
    }
    return $is_palindrome;
}

$value = 0;
for ($i = 100; $i < 1000; $i++) {
    for ($k = 100; $k < 1000; $k++) {
        $result = $k * $i;
        if (check_if_palindrome($result) && $result > $value) {
            $value = $result;
        }
    }
}
echo $value;