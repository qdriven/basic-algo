# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     multi_threading_methods
   Description :
   Author :        patrick
   date：          2019/3/6
-------------------------------------------------
   Change Activity:
                   2019/3/6:
-------------------------------------------------
"""
import threading

__author__ = 'patrick'


# multiple processing

# multiple threading

def worker(num):
    print("work %d" % num)


threads = [] # just like java concurrent package
for i in range(5):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()

## Mutexes and Semaphores
# muter is like a lock, 
