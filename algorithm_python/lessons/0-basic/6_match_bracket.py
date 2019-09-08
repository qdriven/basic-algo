# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     6_match_bracket
   Description :
   Author :        patrick
   date：          2019/9/8
-------------------------------------------------
   Change Activity:
                   2019/9/8:
-------------------------------------------------
"""
__author__ = 'patrick'


def match(arr):
    left = ['{', '[', '(']
    mmap = {'}': '{', ']': '[', ')': '('}
    stack = []
    for c in arr:
        if c in left:
            stack.append(c)
        else:
            if mmap[c] != stack.pop(): return False
    return True


if __name__ == '__main__':
    print(match('[[()()]]'))
    print(match('[[()(])]'))
