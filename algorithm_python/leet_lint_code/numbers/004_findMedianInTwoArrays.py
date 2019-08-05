# # -*- coding: utf-8 -*-
#
# """
# -------------------------------------------------
#    File Name：     004_findMedianInTwoArrays
#    Description :
#    Author :        patrick
#    date：          2019/8/4
# -------------------------------------------------
#    Change Activity:
#                    2019/8/4:
# -------------------------------------------------
# """
# from typing import List
#
# __author__ = 'patrick'
#
# """
#         nums = nums1+nums2
#         nums.sort()
#         n = len(nums)
#         if n%2 != 0:
#             return float(nums[n//2])
#         return (nums[n//2]+nums[n//2-1])/2
# """
#
#
# class Solution:
#     def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
#         m = len(nums1)
#         n = len(nums2)
#         if m == 0:
#             if n % 2 != 0:
#                 return nums2[n / 2]
