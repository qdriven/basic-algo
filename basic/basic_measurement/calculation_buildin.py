# -*- coding:utf-8 -*-
import random

"""
O(n^2)

"""
from basic import time_it


def _loop_for_func(func):
    count = 1
    total = 0
    while count <= 20:
        numbers = [random.randint(1, 9) for i in range(2 * count)]
        try:
            total += func(numbers)
        except Exception:
            func(numbers)
        count += 1
    return total


@time_it
def perf_sum():
    return _loop_for_func(sum)


@time_it
def has_duplicates(source=[]):
    for out_looper in range(len(source) - 1):
        for inner_looper in range(out_looper + 1, len(source)):
            if source[out_looper] == source[inner_looper]:
                return True
    return False


@time_it
def perf_sort():
    return _loop_for_func(sorted)


if __name__ == '__main__':
    perf_sum()
    perf_sort()
    has_duplicates([random.randint(10, 200) for item in range(10000)])
