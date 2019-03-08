# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     decorator_methods
   Description :
   Author :        patrick
   date：          2019/3/6
-------------------------------------------------
   Change Activity:
                   2019/3/6:
-------------------------------------------------
"""
import random

__author__ = 'patrick'


def log_it(func):
    def inner(*args, **kwargs):
        print("start to log")
        print("end of logging")
        return func(*args, **kwargs)

    return inner


@log_it
def foo(x, y):
    return x * y


print(foo(1, 2))


def benchmark(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.clock()
        res = func(*args, **kwargs)
        end = time.clock()
        print("\t%s" % func.__name__, end - start)
        return res

    return wrapper


@benchmark
def random_tree(n):
    tmp = [n for n in range(n)]
    for i in range(n + 1):
        tmp[random.choice(tmp)] = random.choice(tmp)
    return tmp


random_tree(12)


# observer pattern

class ObserverPattern(object):

    def __init__(self):
        self.__x = 10

    @property
    def x(self):
        return self.__x


o = ObserverPattern()
print(o.x)


# o.x=100 #AttributeError: can't set attribute

# Singleton

class SinEx:
    _sing = None

    def __new__(cls, *args, **kwargs):
        if not cls._sing:
            cls._sing = super(SinEx, cls).__new__(cls, *args, **kwargs)
        return cls._sing

x=SinEx()
print(x)
y=SinEx()
print(y)
print(x==y) # true? why