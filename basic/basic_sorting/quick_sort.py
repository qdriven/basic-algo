# -*- coding:utf-8 -*-

"""
Quick Sort:
1. define a pivot
2. less than pivot move left, otherwise move right (partition)
3. repeat step 1-2 against the sub sets
"""


def quick_sort(source=[]):
    if len(source) < 1:
        return source

    # define pivot
    pivot = source.pop()
    # partition
    less = []
    greater = []

    for item in source:
        if item > pivot:
            greater.append(item)
        else:
            less.append(item)

    return quick_sort(less) + [pivot] + quick_sort(greater)


if __name__ == '__main__':
    data = [0, 2, 4, 5, 19, 8, 3, 4, 22, 100, 1, 90, 87, 11]
    print(quick_sort(data))
