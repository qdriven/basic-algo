# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     sort_integers
   Description :
   Author :        patrick
   date：          2019/3/10
-------------------------------------------------
   Change Activity:
                   2019/3/10:
-------------------------------------------------
"""
__author__ = 'patrick'


# select sort
def sort_it(nums):
    arr_len = len(nums)
    for i in range(arr_len):
        ind = i
        for j in range(i + 1, arr_len):
            if nums[ind] > nums[j]:
                ind = j
        nums[i], nums[ind] = nums[ind], nums[i]


def insert_sorting(nums):
    for i in range(1, len(nums)):
        pivot = nums[i]
        j = i - 1
        while j >= 0 and pivot < nums[j]:
            nums[j + 1] = nums[j]
            j -= 1
        nums[j + 1] = pivot


def bubble_sort(nums):
    n = len(nums)
    for i in range(n):
        for j in range(n - 1 - i):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], A[j]


numbers = [1, 6, 5, 43]
sort_it(numbers)

print(numbers)
