# -*- coding:utf-8 -*-
from time import time
from timeit import timeit

from basic.logN import bs_contains, performance_sorted_collection


def insert_in_place(orderd_collection, target):
    idx = bs_contains(orderd_collection, target)
    if idx < 0:
        return orderd_collection.insert(-(idx + 1), target)

    orderd_collection.insert(idx, target)


if __name__ == '__main__':
    performance_sorted_collection(insert_in_place)
