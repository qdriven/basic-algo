# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     3_duplicate_word
   Description :
   Author :        patrick
   date：          2019/9/8
-------------------------------------------------
   Change Activity:
                   2019/9/8:
-------------------------------------------------
"""
__author__ = 'patrick'

"""
文件中每行表示好一个单词
找重名的单词和重复出现的个数
1。 外面放一个字典存储，k为单词，v为出现的次数，如果v大于1就是重复
"""
def find_count(filename):
    count_map = {}
    with open(filename, encoding='utf-8') as f:
        for line in f:
            if line in count_map:
                count_map[line] += 1
            else:
                count_map[line] = 1
    return {k: v for k, v in count_map.items() if v > 1}

