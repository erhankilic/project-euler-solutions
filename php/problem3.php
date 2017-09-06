<?php
/**
 * @Author: Erhan Kılıç
 * @Website: http://erhankilic.org
 * @Problem: The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 * https://projecteuler.net/problem=3
 */

class ProblemSolver
{
    private $number;
    private $current_prime_number = 2;

    public function __construct(int $number)
    {
        $this->number = $number;
    }

    private function find_next_prime_number()
    {
        if ($this->current_prime_number == 2) {
            $this->current_prime_number++;
        } else {
            $this->current_prime_number += 2;
        }
        $can_divide = false;
        $number = 2;
        while ($number < $this->current_prime_number) {
            if ($this->current_prime_number % $number == 0) {
                $can_divide = true;
            }
        }
        if ($can_divide) {
            $this->find_next_prime_number();
        }
    }
}