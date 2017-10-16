# -*- coding:utf-8 -*-

from basic.binary.binary_search_tree import bs_contains, performance_sorted_collection


def insert_in_place(ordered_collection, target):
    idx = bs_contains(ordered_collection, target)
    if idx < 0:
        return ordered_collection.insert(-(idx + 1), target)

    ordered_collection.insert(idx, target)


if __name__ == '__main__':
    performance_sorted_collection(insert_in_place)
