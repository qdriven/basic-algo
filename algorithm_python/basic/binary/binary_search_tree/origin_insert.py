# -*- coding:utf-8 -*-
from basic.binary.binary_search_tree import performance_sorted_collection


def insert_in_place(ordered_collection, target):
    for index, item in enumerate(ordered_collection):
        if item > target:
            return ordered_collection.insert(index, target)
    ordered_collection.append(target)


if __name__ == '__main__':
    performance_sorted_collection(insert_in_place)
