# -*- coding:utf-8 -*-
"""
# Questions

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.

## Answer

- 边界值判断1
- factor define，然后一种除以2，3，5，直到没有余数或者有余数
- 判断剩余的数是不是1，如果是1，返回True，否则返回False

"""


class Solution(object):
    def isUgly_1(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num == 1: return True
        if num <= 0: return False
        factor = [2, 3, 5]
        left = num
        for item in factor:
            while left % item == 0:
                left /= item
                if left == 1:
                    break

        return left == 1

    def isUgly(self, num):
        if num == 1: return True
        if num <= 0: return False
        factor = [7, 11, 13, 17, ]
