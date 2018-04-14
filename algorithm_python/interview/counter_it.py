# -*- coding:utf-8 -*-

"""
找出只有两个相等的值
"""
from collections import Counter

source = [1, 3, 8, 9, 15, 12, 15, 3, 3, 9]


# 不使用 python 标准库
def get_2dup(candidates):
    if candidates is None:
        return []
    if len(candidates) <= 1:
        return []
    count_result = {}
    for candidate in candidates:
        count_result[candidate] = count_result.get(candidate, 0) + 1
    return [k for k, v in count_result.items() if v == 2]


# 使用Counter
def get_2dup_counter(candidates):
    if candidates is None:
        return []
    if len(candidates) <= 1:
        return []
    count_result = Counter(candidates)
    return [k for k, v in count_result.items() if v == 2]


if __name__ == '__main__':
    print(get_2dup(source))
    print(get_2dup([1]))
    print(get_2dup([]))
    print(get_2dup(None))
    print(get_2dup_counter(source))
    print(get_2dup_counter(None))
    print(get_2dup_counter([]))
    print(get_2dup_counter([9]))
