# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     binary_search
   Description :
   Author :        patrick
   date：          2019/8/3
-------------------------------------------------
   Change Activity:
                   2019/8/3:
-------------------------------------------------
"""
from time import time
from timeit import timeit

__author__ = 'patrick'


def contains(collection, target):
    return target in collection


def bs_contains(ordered, target):
    low = 0
    high = len(ordered) - 1
    while low <= high:
        mid = int((low + high) / 2)
        if target == ordered[mid]:
            return mid
        elif target < ordered[mid]:
            high = mid - 1
        else:
            low = mid + 1
    return -(low + 1)


def insert_in_place(ordered, target):
    inx = bs_contains(ordered, target)
    if inx < 0:
        ordered.insert(-(inx + 1), target)
    ordered.insert(inx, target)


def performance():
    """Demonstrate execution performance of contains"""
    n = 1024
    while n < 50000000:
        sorted_col = list(range(n))
        now = time()

        # Code whose performance is to be evaluated
        insert_in_place(sorted_col, n + 1)

        done = time()

        print(n, (done - now) * 1000)
        n *= 2


if __name__ == '__main__':
    performance()
