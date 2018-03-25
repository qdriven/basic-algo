# -*- coding:utf-8 -*-
class Solution(object):
    def is_palindrome(self, x):
        """
        reverse the int, if they are same return true
        :param x:
        :return:
        """
        if x == 0:
            return True
        if int(x % 10) == 0:
            return False
        if x < 0:
            return False
        if 0 <= x < 10:
            return False

        r = 0
        while r < x:
            e = int(x % 10)
            x = x // 10
            if r == x:
                return True
            r = r * 10
            r = r + e
        return r == x
