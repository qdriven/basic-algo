# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     math
   Description :
   Author :        patrick
   date：          2019/9/8
-------------------------------------------------
   Change Activity:
                   2019/9/8:
-------------------------------------------------
"""
__author__ = 'patrick'
"""
    基本的初等数学类
    最大公约数，公倍数，素因子分解，闰年判断，找零钱，斐波那契数列
"""


def is_leap_year(year):
    """
    是否是闰年
    :param year:
    :return:
    """
    return (not year % 4 and year % 100) or (not year % 400)


def mod(money):
    """
    找零钱
    :param money:
    :return:
    """
    cent = int(money * 100)
    all_cent = {25: 0, 10: 0, 5: 0, 1: 0}
    for k in all_cent:
        all_cent[k], cent = divmod(cent, k)
    return all_cent


# 最大公约数，辗转相除法
def max_common_divisor(m, n):
    while True:
        remainder = m % n
        if not remainder:
            return n
        else:
            m, n = n, remainder


def min_common_multiple(m, n):
    """
    最小公倍数
    :param m:
    :param n:
    :return:
    """
    return m * n / max_common_divisor(m, n)


# 素数的判断
def is_prime(n):
    result = True
    for i in range(int(n / 2), 1, -1):
        if n % i == 0:
            result = False
            break
    return result


# 获取n的所有因子
def get_factors(n):
    result = [n]
    for i in range(int(n / 2), 0, -1):
        if n % i == 0:
            result.append(i)
    return result


# 素因子分解
def decompose(n):
    all_factors = get_factors(n)
    all_factors.remove(1)
    all_factors.remove(n)
    prime_factors = [x for x in all_factors if is_prime(x)]
    prime_factors.sort(reverse=True)
    result = []
    remainder = n
    for f in prime_factors:
        while remainder >= f:
            qut, rem = divmod(remainder, f)
            if rem != 0:
                break
            else:
                remainder = qut
                result.append(f)
    return result


# 获取前N个斐波那契数列
def fibonacci(n):
    result = []
    if n == 1:
        result.append(1)
    elif n >= 2:
        result.append(1)
        result.append(1)
        for i in range(2, n):
            result.append(result[-1] + result[-2])
    return result


if __name__ == '__main__':
    print(mod(132))
    print(max_common_divisor(80, 24))
    print(min_common_multiple(24, 6))
    print(get_factors(23))
    print(decompose(24))
