# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     different_types
   Description :  different number types
   Author :        patrick
   date：          2019/3/5
-------------------------------------------------
   Change Activity:
                   2019/3/5:
-------------------------------------------------
"""
import cmath
from fractions import Fraction

__author__ = 'patrick'

print((999).bit_length())
print(int('11'))
print(int('11', 2))


# floats hava s precision limit
def a(x, y, places=7):
    return round(abs(x - y), places)


print(a(4.5, 5.6))
## division always return float
print(divmod(54.4, 12))  # return both quotient and remainder
print(round(1111.96, -3))
print(round(100.96, 2))

print(2.9.as_integer_ratio())

# complex numbers
print(cmath.cos(90))
print(cmath.pi)


def rounding_floats(number, places):
    return round(number, places)


def get_denominator(num1, num2):
    a = Fraction(num1, num2)
    return a.denominator


def get_numerator(number1, number2):
    a = Fraction(number1, number2)
    return a.numerator


def float_to_fractions(number):
    return Fraction(number.as_integer_ratio())


if __name__ == '__main__':
    number1 = 1.25
    number2 = 1
    number3 = -1
    number4 = 5 / 4
    number6 = 6
    assert (rounding_floats(number1, number2) == 1.2)
    assert (rounding_floats(number1 * 10, number3) == 10)
    # assert (float_to_fractions(number1) == number4)
    assert (get_denominator(number2, number6) == number6)
    assert (get_numerator(number2, number6) == number2)

    print(bin(99))
    print(hex(99))
    print(oct(99))

# todo demical modules