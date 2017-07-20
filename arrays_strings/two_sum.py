# -*- coding:utf-8 -*-

class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) < 2:
            return []
        temp = {}
        for inx, val in enumerate(nums):
            if val in temp:
                return [temp[val], inx]
            else:
                temp[target - val] = inx
        return []

