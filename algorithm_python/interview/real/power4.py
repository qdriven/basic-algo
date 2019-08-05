# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     power4
   Description :
   Author :        patrick
   date：          2019/8/4
-------------------------------------------------
   Change Activity:
                   2019/8/4:
-------------------------------------------------
"""
__author__ = 'patrick'


class Solution:
    def isPowerOfFour(self, num):
        # 注意不要漏掉num < 0这个条件判断
        if num < 0:
            return False

        binstr = bin(num)
        # 如果是4的幂，那么二进制字符中必须只能有一个1，并且二进制字符的长度一定是奇数,例如
        # 4:100
        # 16:   1 0000
        # 64: 100 0000
        return len(binstr) % 2 == 1 and binstr.count('1') == 1
