# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     hash_map_impl
   Description :   implement JAVA HASH MAP in Python
   Author :        patrick
   date：          2019/2/2
-------------------------------------------------
   Change Activity:
                   2019/2/2:
-------------------------------------------------
"""
__author__ = 'patrick'


class HashMapJava:
    """
    1. can't contain duplicated key
    2. allow null key and value
    3. unordered collection
    4. not thread safe
    5. underlying: table + LinkedList
    constant-time performance for basic operation(get and put)
    constructor: capacity and load factor: default 0.75
    fail-fast VS fail-safe
    resize: rehash
    """

    def __init__(self, capacity=16, load_factor=0.75):
        self._size = 10
        self._capacity = capacity
        self._load_factor = load_factor
        self._table = []  # length should be power of two
        self.__empty_table = [];

    def is_empty(self):
        return self._size > 0

    @property
    def size(self):
        return self._size

    def contains_key(self, key):
        pass

    def contains_value(self, value):
        pass

    def get(self, key):
        pass

    def put(self, key, value):
        pass

    def remove(self, key):
        pass

    def __iter__(self):
        pass

    def clear(self):
        pass


class Node:
    def __init__(self, hash_code, key, value, next):
        self.hash_code = hash_code
        self.key = key
        self.value = value
        self.next = next
