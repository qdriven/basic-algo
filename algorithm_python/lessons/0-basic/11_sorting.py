# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     11_sorting
   Description :
   Author :        patrick
   date：          2019/9/8
-------------------------------------------------
   Change Activity:
                   2019/9/8:
-------------------------------------------------
"""
__author__ = 'patrick'


def insertSort(seq):
    for j in range(1, len(seq)):
        key = seq[j]
        # insert arrays[j] into the sorted seq[0...j-1]
        i = j - 1
        while i >= 0 and seq[i] > key:
            seq[i + 1] = seq[i]
            i -= 1
        seq[i + 1] = key


def selectSort(seq):
    le = len(seq)
    for i in range(le - 1):
        minIndx = i
        for j in range(i, le):
            if seq[minIndx] > seq[j]:
                minIndx = j
        if i != minIndx:
            seq[i], seq[minIndx] = seq[minIndx], seq[i]

def mergeSort(seq):
    mergeSortRange(seq, 0, len(seq) - 1)


def mergeOrderedSeq(seq, left, middle, right):
    """
    seq: 待排序序列
    left <= middle <= right
    子数组seq[left..middle]和seq[middle+1..right]都是排好序的
    该排序的时间复杂度为O(n)
    """
    tempSeq = []
    i = left
    j = middle + 1
    while i <= middle and j <= right:
        if seq[i] <= seq[j]:
            tempSeq.append(seq[i])
            i += 1
        else:
            tempSeq.append(seq[j])
            j += 1
    if i <= middle:
        tempSeq.extend(seq[i:middle + 1])
    else:
        tempSeq.extend(seq[j:right + 1])
    seq[left:right + 1] = tempSeq[:]


def mergeSortRange(seq, start, end):
    """
    归并排序一个序列的子序列
    start: 子序列的start下标
    end: 子序列的end下标
    """
    if start < end:  # 如果start >= end就终止递归调用
        middle = (start + end) / 2
        mergeSortRange(seq, start, middle)  # 排好左边的一半
        mergeSortRange(seq, middle + 1, end)  # 再排好右边的一半
        mergeOrderedSeq(seq, start, middle, end)  # 最后合并排序结果


"""
    Topic: sample
    Desc : 归并排序中对小数组采用插入排序
        纯归并排序的复杂度为： O(nlgn)，而纯插入排序的时间复杂度为：O(n^2)。数据量很大的时候采用归并排序
        但是在n较小的时候插入排序可能运行的会更快点。因此在归并排序中当子问题变得足够小时，
        采用插入排序来使得递归的叶子变粗可以加快排序速度。那么这个足够小到底怎么去衡量呢？ 请看下面：
        这么几个我不证明了，比较简单：
        A，插入排序最坏情况下可以在O(nk)时间内排序每个长度为k的n/k个子列表
        B，在最坏情况下可在O(nlg(n/k))的时间内合并这些子表
        C，修订后的算法的最坏情况运行时间复杂度是O(nk + nlg(n/k))
        那么，O(nk+nlg(n/k))=O(nlgn).只能最大是k=O(lgn).等式左边中第一项是高阶项。
        k如果大于lgn,则比归并排序复杂度大了。左边可以写成nk+nlgn-nlgk，k等于lgn时，
        就是2nlgn-nlglgn.忽略恒定系数，则与归并排序是一样的。
        最后结论：  k < lg(n)的时候，使用插入排序
"""
from math import log



def mergeSort(seq):
    mergeSortRange(seq, 0, len(seq) - 1, log(len(seq), 2))


def mergeOrderedSeq(seq, left, middle, right):
    """
    seq: 待排序序列
    left <= middle <= right
    子数组seq[left..middle]和seq[middle+1..right]都是排好序的
    该排序的时间复杂度为O(n)
    """
    tempSeq = []
    i = left
    j = middle + 1
    while i <= middle and j <= right:
        if seq[i] <= seq[j]:
            tempSeq.append(seq[i])
            i += 1
        else:
            tempSeq.append(seq[j])
            j += 1
    if i <= middle:
        tempSeq.extend(seq[i:middle + 1])
    else:
        tempSeq.extend(seq[j:right + 1])
    seq[left:right + 1] = tempSeq[:]


def mergeSortRange(seq, start, end, threshold):
    """
    归并排序一个序列的子序列
    start: 子序列的start下标
    end: 子序列的end下标
    threshold: 待排序长度低于这个值，就采用插入排序
    """
    if end - start + 1 < threshold:
        tempSeq = seq[start: end + 1]
        insertSort(tempSeq)
        seq[start: end + 1] = tempSeq[:]
    elif start < end:  # 如果start >= end就终止递归调用
        middle = (start + end) / 2
        mergeSortRange(seq, start, middle, threshold)  # 排好左边的一半
        mergeSortRange(seq, middle + 1, end, threshold)  # 再排好右边的一半
        mergeOrderedSeq(seq, start, middle, end)  # 最后合并排序结果


def bubbleSort(seq):
    for i in range(len(seq)):
        for j in range(len(seq) - 1, i, -1):
            if seq[j] < seq[j - 1]:
                seq[j - 1], seq[j] = seq[j], seq[j - 1]


class Heap():
    def __init__(self, seq, heapSize, length):
        """
        seq: 存放待排序的序列
        heapSize: 堆的大小
        lenght: 整个序列大小
        """
        self.seq = seq
        self.heapSize = heapSize
        self.length = length


def heapSort(seq):
    """
    堆排序算法
    """
    heap = Heap(seq, len(seq), len(seq))
    __buildMaxHeap(heap)
    s = heap.seq
    for i in range(heap.length - 1, 0, -1):
        s[0], s[i] = s[i], s[0]
        heap.heapSize -= 1
        __maxHeapify(heap, 0)


def __maxHeapify(heap, i):
    """
    前提是i的两棵子树left(i)和right(i)的二叉树都是最大堆了
    现在加入i节点后，要保持这个二叉树为最大堆的性质
    heap: Heap数据结构
    """
    seq = heap.seq
    slen = heap.heapSize
    while True:
        left = (i << 1) + 1
        right = (i + 1) << 1
        if left < slen and seq[left] > seq[i]:
            largest = left
        else:
            largest = i
        if right < slen and seq[right] > seq[largest]:
            largest = right
        if largest != i:
            seq[largest], seq[i] = seq[i], seq[largest]
            i = largest
        else:
            break


def __buildMaxHeap(heap):
    """
    由完全二叉树的性质可知：对于 n/2..n-1为下标的元素，都是叶子节点，
    那么可从下标floor((i+1)/2 - 1)开始往前到0的元素调用maxHeapify
    heap: Heap数据结构
    """
    slen = heap.heapSize
    for i in range(((slen + 1) >> 1) - 1, -1, -1):
        __maxHeapify(heap, i)

def quickSort(seq):
    # __quickSubSort(seq, 0, len(seq) - 1)
    __quickSubSortTail(seq, 0, len(seq) - 1)


def __partition(A, p, r):
    """分解子数组"""
    x = A[r]
    i = p - 1
    for j in range(p, r):
        if A[j] <= x:
            i += 1
            A[i], A[j] = A[j], A[i]
    A[i + 1], A[r] = A[r], A[i + 1]
    return i + 1


def __randPartition(A, p, r):
    """分解子数组： 随机化版本"""
    rinx = randint(p, r)  # 随机的pivot
    A[rinx], A[r] = A[r], A[rinx]  # 还是将这个pivot放到最后
    x = A[r]
    i = p - 1
    for j in range(p, r):
        if A[j] <= x:
            i += 1
            A[i], A[j] = A[j], A[i]
    A[i + 1], A[r] = A[r], A[i + 1]
    return i + 1


def __quickSubSort(seq, p, r):
    """递归版本的"""
    if p < r:
        q = __randPartition(seq, p, r)
        __quickSubSort(seq, p, q - 1)
        __quickSubSort(seq, q + 1, r)


def __quickSubSortTail(seq, p, r):
    """循环版本，模拟尾递归，可以大大减少递归栈深度，而且时间复杂度不变"""
    while p < r:
        q = __randPartition(seq, p, r)
        if q - p < r - q:
            __quickSubSortTail(seq, p, q - 1)
            p = q + 1
        else:
            __quickSubSortTail(seq, q + 1, r)
            r = q - 1


"""
    Topic: sample
    Desc : 计数排序
        实际工作中，如果k=O(n)，那么选择计数排序，线性时间。
        比如排序数组[1, 10*2, 10*3, .... 10*100]，n = 100， k=10n=O(n)，
        那么可以用这个计数排序
        计数排序是稳定的：原数组中相同元素在输出数组中的次序是一样的
"""


def countSort(A, k, offset=0):
    """
    A: 待排序数组
    k: 数组A区间-offset后的最大值
    offset: 有时候A在一个区间内[a,b]，这时候，可以设置offset为a
    """
    if offset > 0:
        A[:] = [p - offset for p in A]
    B = [0] * len(A)  # 最终输出的排序数组
    C = [0] * k  # 临时存储数组
    for i in range(0, len(A)):
        C[A[i]] += 1  # C[i]现在代表数组A中元素等于i的个数
    for i in range(1, k):
        C[i] += C[i - 1]  # C[i]现在代表数组A中元素小于等于i的个数
    for j in range(len(A) - 1, -1, -1):
        B[C[A[j]] - 1] = A[j]
        C[A[j]] -= 1  # 防止数组A有重复的数，占据了相同的位置
    A[:] = B[:]
    if offset > 0:
        A[:] = [p + offset for p in A]

"""
    Topic: sample
    Desc : 基数排序
        有时需要对记录的几个关键字分别排序，比如用三个关键字年、月、日对日期排序。
        可以用基数排序，用一种稳定排序算法(比如计数排序)对这些信息进行三次排序：
        优先级从低到高，权重从低到高。
"""


def radixSort(A, digit, base):
    """
    digit: 代表排序数组的最大位数
    base:  代表进制
    """
    for di in range(1, digit + 1):
        B = [0] * len(A)  # 最终输出的排序数组
        C = [0] * base  # 临时存储数组
        for i in range(0, len(A)):
            # split the specified digit from the element
            tmpSplitDigit = A[i] / pow(10, di - 1) - (A[i] / pow(10, di)) * 10
            C[tmpSplitDigit] += 1  # C[i]现在代表数组A中元素等于i的个数
        for i in range(1, base):
            C[i] += C[i - 1]  # C[i]现在代表数组A中元素小于等于i的个数
        for j in range(len(A) - 1, -1, -1):
            tmpSplitDigit = A[j] / pow(10, di - 1) - (A[j] / pow(10, di)) * 10
            B[C[tmpSplitDigit] - 1] = A[j]
            C[tmpSplitDigit] -= 1  # 防止数组A有重复的数，占据了相同的位置
        A[:] = B[:]

if __name__ == '__main__':
    seq = [5, 2, 4, 6, 1, 3]
    insertSort(seq)
    selectSort(seq)
    print(seq)
