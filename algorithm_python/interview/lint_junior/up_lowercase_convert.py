# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     up_lowercase_convert
   Description :
   Author :        patrick
   date：          2019/3/8
-------------------------------------------------
   Change Activity:
                   2019/3/8:
-------------------------------------------------
"""
__author__ = 'patrick'

print("a".swapcase())

print(ord("a"))
print(ord("z"))
print(ord("A"))


def upcase_lowercase_convert(input):
    result=""
    for i in range(len(input)):
        if ord(input[i]) >= 97:
            result=result+chr(ord(input[i]) - 32)
        else:
            result=result+input[i]
    return result

if __name__ == '__main__':
    print(upcase_lowercase_convert("b"))
