# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     5_max_subarry
   Description :
   Author :        patrick
   date：          2019/9/8
-------------------------------------------------
   Change Activity:
                   2019/9/8:
-------------------------------------------------
"""
__author__ = 'patrick'


def maxSubArr(seq):
    return __findMaxSubArr(seq, 0, len(seq) - 1)


def __findMaxSubArr(seq, low, high):
    if low == high:
        return low, high, seq[low]
    else:
        mid = (low + high) / 2
        l = lefLow, leftHigh, leftSum = __findMaxSubArr(seq, low, mid)
        r = rightLow, rightHigh, right_sum = __findMaxSubArr(seq, mid + 1, high)
        c = crossLow, crossHigh, crossSum = __maxCrossingSubArr(seq, low, mid, high)
        return max([l, r, c], key=lambda k: k[2])  # 这个太cool了


def __maxCrossingSubArr(seq, low, mid, high):
    """
    寻找seq[low..high]跨越了中点mid的最大子数组
    总循环次数为high-low+1，线性的
    """
    leftSum = float('-Inf')
    sumTemp = 0
    for i in range(mid, low - 1, -1):
        sumTemp += seq[i]
        if sumTemp > leftSum:
            leftSum = sumTemp
            maxLeft = i
    rightSum = float('-Inf')
    sumTemp = 0
    for j in range(mid + 1, high + 1):
        sumTemp += seq[j]
        if sumTemp > rightSum:
            rightSum = sumTemp
            maxRight = j
    return maxLeft, maxRight, leftSum + rightSum


if __name__ == '__main__':
    print(maxSubArr([13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]))
