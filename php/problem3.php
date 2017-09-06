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
    private $original_number;
    private $number;
    private $current_prime_number = 2;
    private $prime_numbers = [];
    private $largest_prime_number;

    /**
     * ProblemSolver constructor.
     * @param int $number
     */
    public function __construct(int $number)
    {
        $this->number = $this->original_number = $number;
    }

    /**
     * Finds the next prime number
     */
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
            $number++;
        }
        if ($can_divide) {
            $this->find_next_prime_number();
        }
    }

    /**
     * Finds the prime factors and largest prime factor of given number
     */
    public function find_prime_factors()
    {
        while ($this->number > 0) {
            if ($this->number == 1) {
                $this->largest_prime_number = $this->current_prime_number;
                break;
            } else {
                if ($this->number % $this->current_prime_number == 0) {
                    $this->prime_numbers[] = $this->current_prime_number;
                    $this->number /= $this->current_prime_number;
                } else {
                    $this->find_next_prime_number();
                }
            }
        }
        echo $this->largest_prime_number;
    }
}

$solver = new ProblemSolver(600851475143);
$solver->find_prime_factors();