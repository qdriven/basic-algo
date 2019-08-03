# -*- coding:utf-8 -*-

"""
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
"""


class Solution_MIR_1:
    # @param {int[]} nums1 an integer array
    # @param {int[]} nums2 an integer array
    # @return {int[]} an integer array
    def intersection(self, nums1, nums2):
        temp = {}
        result = []
        for item in nums1:
            temp[item] = item
        for item in nums2:
            if item in temp:
                result.append(temp)
        return result


class Solution_MIR_2:
    # @param {int[]} nums1 an integer array
    # @param {int[]} nums2 an integer array
    # @return {int[]} an integer array
    def intersection(self, nums1, nums2):
        result = []
        for item in nums1:
            if (item in nums2) and (item not in result):
                result.append(item)

        return result


class Solution_FASTER:
    # @param {int[]} nums1 an integer array
    # @param {int[]} nums2 an integer array
    # @return {int[]} an integer array
    def intersection(self, nums1, nums2):
        result = []
        for item in nums1:
            if item not in result:
                if item in nums2:
                    result.append(item)

        return result

# todo for sorted and distinct numbers intersection
