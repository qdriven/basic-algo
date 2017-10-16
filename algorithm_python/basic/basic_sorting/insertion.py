# -*- coding:utf-8 -*-
from basic import random_list, time_it


def insert(source, idx, value):
    """
    insert value into proper location
    :param source:
    :param idx:
    :param value:
    :return:
    """

    i = idx - 1
    while i >= 0 and source[i] > value:
        source[i + 1] = source[i]
        i -= 1

    source[i + 1] = value

@time_it
def insertion(source=[]):
    for item in range(1, len(source)):
        insert(source, item, source[item])


if __name__ == '__main__':
    source = random_list
    insertion(source)
    print(len(source),source)
