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

Solution:
首先 a+b =target
1. 定义一个dict，保存内容为 循环当前数和目标值的差值以及当前值的索引位置
2. 循环nums，如果当前值在定义的dict中，那么返回当前值的索引和当前值在dict中对应的值
否则就保存循环当前数和目标值的差值以及当前值的索引位置
3. 遍历所有的值如果没有找到结果，则返回空list
```
"""


class Solution_MIR(object):
    def twoSum(self, nums, target):
        """
        O(n^2) 两次循环
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
        将数字和需要的和放到一个dict中，如果发现就返回，一次循环既可以
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


class Solution_EasyUnderstand:
    def twoSum(self, nums, target):
        if len(nums) < 2:
            return []
        temp = {}  ## key: the left value, value: the first index
        # for idx, value in enumerate(nums):
        #     temp[value] = idx
        for idx, value in enumerate(nums):
            if value in temp:
                return [temp[value], idx]
            else:
                temp[target - value] = idx
        return []


if __name__ == '__main__':
    result = Solution_EasyUnderstand().twoSum([3, 2, 4], 6)
    print(result)
