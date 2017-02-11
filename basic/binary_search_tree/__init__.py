# -*- coding:utf-8 -*-
from time import time


def contains(collection, target):
    """
    detemine whether collection contains target
    :param collection: source collection
    :param target: target object
    :return: true or false
    """
    return target in collection


def bs_contains(ordered_collection, target):
    """
    binary search:
    1. for a ordered collection, from low to high
    2. first compare the target with the mid of collection
    3. if equal, then return the mid position
    4. if target is less then the mid one, the compare the left set to
       find the target position
    5. otherwise find the right sets to find the target position
    6. repeat 2-5

    :param ordered_collection:
    :param target:
    :return:
    """
    low = 0
    high = len(ordered_collection) - 1
    while low <= high:
        mid = int((low + high) / 2)
        if target == ordered_collection[mid]:
            return mid
        elif target < ordered_collection[mid]:
            high = mid - 1
        else:
            low = mid + 1
    return -(low + 1)


def performance_sorted_collection(target_func):
    n = 1024
    while n < 5000000:
        sorted_collection = list(range(n))
        now = time()
        target_func(sorted_collection, n + 1)
        done = time()
        print(n, (done - now) * 1000)
        n *= 2
