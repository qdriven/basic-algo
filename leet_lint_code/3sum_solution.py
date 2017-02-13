# -*- coding:utf-8 -*-

"""
Given an array S of n integers, are there elements a, b, c in S such that a +
b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
    For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)
"""


def sum_it(a,b,c):
    return a+b+c


class Solution:

    def __init__(self,source=[]):
        self.result =[]
        self.source=source

    def find_result_1(self):
        if len(self.source)<3:
            return self.result

        """
        1. sorted it
        2. every iteration to add three up, index: i, i+1,i+2
        """
        self.source.sort()
        for i in range(len(self.source)):
            pass




