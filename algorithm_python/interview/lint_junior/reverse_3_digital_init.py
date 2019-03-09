# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     reverse_3_digital_init
   Description :
   Author :        patrick
   date：          2019/3/8
-------------------------------------------------
   Change Activity:
                   2019/3/8:
-------------------------------------------------
"""
__author__ = 'patrick'


##反转一个只有3位数的整数

def reverse_3_digital_int(source):
    return source % 10 * 100 + int(source % 100 / 10) * 10 + int(source / 100)


if __name__ == '__main__':
    print(reverse_3_digital_int(123))
    print(reverse_3_digital_int(900))
