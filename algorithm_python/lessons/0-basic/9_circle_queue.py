# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     9_circle_queue
   Description :
   Author :        patrick
   date：          2019/9/8
-------------------------------------------------
   Change Activity:
                   2019/9/8:
-------------------------------------------------
"""
__author__ = 'patrick'


def circle_out(n, m):
    # 初始化数组，1表示在队列中，0表示已经出了队列
    queue_status = [1 for n in range(0, n)]
    result = []  # 出队序列
    out_count = 0  # 出队人数
    pass_num = 0  # 每次小循环经过的人数
    index = 0  # 循环下标
    while out_count < n:
        while True:
            if queue_status[index] == 1:
                pass_num += 1
            if pass_num >= m:
                break
            index = (index + 1) % n
        # 出队
        queue_status[index] = 0
        out_count += 1
        result.append(index + 1)
        pass_num = 0
    print(result)
    return result

if __name__ == '__main__':
    circle_out(7, 3)