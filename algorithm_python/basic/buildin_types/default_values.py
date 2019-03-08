# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     default_values
   Description :
   Author :        patrick
   date：          2019/3/5
-------------------------------------------------
   Change Activity:
                   2019/3/5:
-------------------------------------------------
"""
__author__ = 'patrick'


def foo(a, b=None):
    if b is None:
        b = []


def bar(a, b=[]):  # bad because [] is mutable
    print(b)


import sys

sys.path.append(".")

print(sys.argv[0])
print(sys.argv[1:])
print(dir(sys))
