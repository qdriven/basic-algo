# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     test
   Description :
   Author :        patrick
   date：          2019/8/28
-------------------------------------------------
   Change Activity:
                   2019/8/28:
-------------------------------------------------
"""
from math import sqrt

__author__ = 'patrick'

p = 120

c = p // 2 - 1

print(c)

b = c // 2

print(b)


# a: 最小范围
# b: 中间范围
# c: 对打范围

def cal_right_triangle(total):
    c = total // 2
    tmp = total // 3
    count = 0
    loop_count = 0
    result = []
    print(tmp)
    print(c)
    less_a = int(sqrt(c * c - (c - 2) * (c - 2)))
    max_b = int(sqrt((c * c) - pow(tmp, 2)))
    if max_b > tmp:
        max_b = tmp
    print(less_a, max_b)
    for c in range(c - 1, tmp, -1):
        for b in range(tmp,c):
            for a in range(less_a,b):

                loop_count += 1
                print(loop_count)
                b = total - a - c
            if c > b > a:
                if a * a + b * b == c * c:
                    count += 1
                    result.append((a, b, c))

    return result


print(cal_right_triangle(120))

# print(sqrt(pow(58,2)-pow(49,2)))
