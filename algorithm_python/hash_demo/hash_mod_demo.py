# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     hash_mod_demo
   Description :   hash by mod
   Author :        patrick
   date：          2019/2/2
-------------------------------------------------
   Change Activity:
                   2019/2/2:
-------------------------------------------------
"""
__author__ = 'patrick'


def what_is_mod(source_data, mod_num=7):
    """
    1. 使用余数进行分类
    2. 余数的范围有限，总是在被除数的一个氛围内
    3. 分批存放连续数据
    :return: int less than 7
    """
    return source_data % mod_num


def simulate_hash_pwd(source_data):
    """
    1. 每一位数字+100
    2. 然后每一位除7 取余数 作为新的数字
    :param source_data:
    :return: hash password
    """
    pass
