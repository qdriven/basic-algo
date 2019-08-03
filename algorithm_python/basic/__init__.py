# -*- coding:utf-8 -*-
import random
from time import time


def time_it(fn):
    def wrapper(*args, **kwargs):
        print("start time {name}....".format(name=fn.__name__))
        start = time()
        fn(*args, **kwargs)
        print("end time {name} .".format(name=fn.__name__))
        end = time()
        print("used_time:", end - start)

    return wrapper


"""
@decorator
def func():
    pass

# changed to in runtime:
func = decorator(func)
Usage:
@time_it
def hello(name):
    print("hello world " + name)


hello("patrick")
"""

random_list = [random.randint(10, 200) for item in range(10000)]
