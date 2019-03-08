# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     fibonacci_seq
   Description :
   Author :        patrick
   date：          2019/3/5
-------------------------------------------------
   Change Activity:
                   2019/3/5:
-------------------------------------------------
"""
__author__ = 'patrick'


def fib_generator():
    a, b = 0, 1
    while True:
        yield b
        a, b = b, a + b


def fib(n):
    if n < 3:
        return 1
    a, b = 0, 1
    count = 1
    while count < n:
        count += 1
        a, b = b, a + b
    return b


def fib_recursive(n):
    if n < 3:
        return 1
    return fib_recursive(n - 1) + fib_recursive(n - 2)


print(fib(9))
print(fib_recursive(9))

# how to use generator
# how to find primes
import math
import random


def find_prime_factors(n):
    divisors = [d for d in range(2, n // 2 + 1) if n % d == 0]
    primes = [d for d in divisors if is_prime(d)]
    return primes


def is_prime(n):
    for j in range(2, int(math.sqrt(n))):
        if (n % j) == 0:
            return False
    return True


def generate_prime(number=3):
    while 1:
        p = random.randint(pow(2, number - 2), pow(2, number - 1) - 1)
        p = 2 * p + 1
        if find_prime_factors(p):
            return p


## how to use python generator
f_generator = fib_generator()
for item in range(1, 10):
    print(next(f_generator))
