# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     functional_methods
   Description :
   Author :        patrick
   date：          2019/3/5
-------------------------------------------------
   Change Activity:
                   2019/3/5:
-------------------------------------------------
"""
__author__ = 'patrick'


def f(x):
    return x % 2 != 0 and x % 3 != 0


print(list(filter(f, range(2, 25))))


def cube(x):
    return x * x


print(list(map(cube, [1, 2, 3, 4])))

# lambda function
area = lambda b, h: 0.5 * b * h
print(area(2, 10))
