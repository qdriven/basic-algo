# -*- coding:utf-8 -*-

"""
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
"""


class Solution(object):
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        left = 1
        right = num
        if num == 1:
            return True
        if num <= 0:
            return False
        while left <= right:
            mid = int(left + (right - left) / 2)
            print("left {left},right {right} mid {mid}".format(
                left=left, right=right, mid=mid
            ))
            if mid == num / mid:
                return True
            if num > mid * mid:
                left = mid + 1
            else:
                right = mid-1

        return False

    # todo: newton 方法？？ what's this
    def newton_method(self,num):
        if num < 1:
            return False;
        if num==1:
            return True

        t = num/2+1
        while t*t >num:
            t=(t+num/t)/2

        return t*t ==num