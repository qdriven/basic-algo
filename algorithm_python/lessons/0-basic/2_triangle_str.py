# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     2_triangle_str
   Description :
   Author :        patrick
   date：          2019/9/8
-------------------------------------------------
   Change Activity:
                   2019/9/8:
-------------------------------------------------
"""
__author__ = 'patrick'


# 三角打印
def triangleDisplay(mystr):
    mystr += ' '
    result = []
    le = len(mystr)
    for i in range(1, le):
        result.append(mystr[-i: -1])
    for i in range(le):
        result.append(mystr[i: -1])
    return result


for each in triangleDisplay(u"我和我的小伙伴们都惊呆了"):
    print(each)

if __name__ == '__main__':
    print(triangleDisplay("est"))
