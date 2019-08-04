# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     insertion
   Description :
   Author :        patrick
   date：          2019/8/4
-------------------------------------------------
   Change Activity:
                   2019/8/4:
-------------------------------------------------
"""
__author__ = 'patrick'


def insertion(a):
    for i in range(1, len(a)):
        insert(a, i, a[i])


def insert(a, idx, value):
    i = idx - 1
    while i >= 0 and a[i] > value:
        a[i + 1] = a[i]
        i = i - 1
    a[i + 1] = value
