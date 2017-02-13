# -*- coding:utf-8 -*-

"""
Given an array of integers,
return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:
```
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
"""


class Solution_MIR(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) < 2:
            return []
        for o_idx in range(len(nums) - 1):
            for i_idx in range(o_idx + 1, len(nums)):
                if nums[o_idx] + nums[i_idx] == target:
                    return [o_idx, i_idx]
        return []


class Solution_FASTER(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) < 2:
            return []
        temp = {}
        for i, d in enumerate(nums):
            if d in temp:
                return [temp[d], i]
            temp[target - d] = i

        return []
