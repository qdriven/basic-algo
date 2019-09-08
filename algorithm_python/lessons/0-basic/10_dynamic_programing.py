# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     10_dynamic_programing
   Description :
   Author :        patrick
   date：          2019/9/8
-------------------------------------------------
   Change Activity:
                   2019/9/8:
-------------------------------------------------
"""
__author__ = 'patrick'


def bottom_up_cut_rod(p, n):
    """自底向上版本的动态规划，自底向上时间复杂性函数通常具有更小的系数
    自底向上版本采用子问题的自然顺序，若i<j，则规模为i的子问题比规模为j的子问题更小。
    因此，过程依次求解规模为j=0,1...n的子问题
    给定一段长度为n的钢条和一个价格表p[i](i=1,2,3,4...n)，
    求切割方案，使得销售收益r[n]最大。
    注意，如果长度为n的钢条价格p[n]足够大，最优解可能是完全不需要切割。
    param p: 价格数组，长度为i的钢条价格为p[i]
    param n: 钢条总长度
    """
    # 先初始化数组r
    r = [0] * (n + 1)
    # 用来保存每个最优解二维数组，ans[i]表示长度为i的最优解
    ans = [[]]
    for j in range(1, n + 1):
        q = -999
        # 下面这个内层循环保证长度为j时候所有情况都考虑到了
        # 因为i会从1迭代到j，也就是切割方案中左边方案为1,2...j的时候，跟右边已经有最优解的加起来，
        # 然后算所有的加起来的和的最大值，那肯定就是最优解了！ NB啊
        for i in range(1, j + 1):
            if q < p[i] + r[j - i]:
                q = p[i] + r[j - i]
                ii = i
        r[j] = q
        ans.append([ii] + ans[j - ii])
    return r[n], ans[len(ans) - 1]


def elevatorSchedule(seq):
    """
    seq: 去往每层的人数， 下标代表楼层号， 很明显0和1层都是0
    """
    N1 = N2 = 0  # 到当前层以下的有N1人， 到当前层的有N1人
    N3 = 0  # 到当前层以上的有N3人
    nMinFloors = 0  # 所有乘客要爬的楼层最小总和
    nTargetFloor = 1  # 达到最小值时候的楼层
    for i in range(2, len(seq)):
        N3 += seq[i]
        nMinFloors += seq[i] * (i - 1)
    for i in range(2, len(seq)):
        if N1 + N2 < N3:
            nTargetFloor = i
            nMinFloors += (N1 + N2 - N3)
            N1 += N2
            N2 = seq[i]
            N3 -= seq[i]
        else:
            break
    return nTargetFloor, nMinFloors


def matrix_order(p):
    """:param p: 矩阵规模序列，Ai行列分别为p[i-1],p[i]"""
    INF = float('inf')
    n = len(p) - 1  # 矩阵长度
    m = [[0 for zz in range(n)] for z in range(n)]  # 保存Ai...Aj最优值
    s = [['-' for zz in range(n)] for z in range(n)]  # 保存Ai...Aj最优值时候的括号分割点
    for chain_len in range(2, n + 1):  # chain_len表示每次循环计算链的长度2..n
        for i in range(0, n - chain_len + 1):
            j = i + chain_len - 1
            m[i][j] = INF  # 上面两层循环则是对m方阵的右上三角(除对角线)进行某个赋值MAX
            for k in range(i, j):  # 然后对每个计算最小值
                # 此时m[i][k]和m[k + 1][j]一定已经有值了。why???
                # 因为对于某个i，比j小的肯定赋值过
                # 对于某个j，比i大的肯定也赋值过
                # 上面循环方向示意图可以画下，是从右上三角，斜右下右下的循环。
                q = m[i][k] + m[k + 1][j] + p[i] * p[k + 1] * p[j + 1]
                if q < m[i][j]:
                    m[i][j] = q
                    s[i][j] = k
    for mm in m:
        print(mm)
    for ss in s:
        print(ss)
    print_optimal(s, 0, n - 1)
    return m, s


def print_optimal(s, i, j):
    """根据保存的括号位置表打印出最后的括号最优解"""
    if i == j:
        print('A', end='')
    else:
        print('(', end='')
        print_optimal(s, i, s[i][j])
        print_optimal(s, s[i][j] + 1, j)
        print(')', end='')


def lcs(arr1, arr2):
    m = len(arr1)
    n = len(arr2)
    c = [[0 for kk in range(n + 1)] for kk in range(m + 1)]
    b = [[-1 for kk in range(n)] for kk in range(m)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if arr1[i - 1] == arr2[j - 1]:
                c[i][j] = c[i - 1][j - 1] + 1
                b[i - 1][j - 1] = '↖'  # 代表此元素放入LCS
            elif c[i - 1][j] >= c[i][j - 1]:
                c[i][j] = c[i - 1][j]
                b[i - 1][j - 1] = '↑'  # 行减1，往上
            else:
                c[i][j] = c[i][j - 1]
                b[i - 1][j - 1] = '←'  # 列减1，往左
    rlcs = []
    get_lcs_arr(b, arr1, len(arr1) - 1, len(arr2) - 1, rlcs)
    print('LCS长度为:%d' % c[m][n])
    print('一个最优解:%s' % str(rlcs))
    return c[m][n], rlcs


def get_lcs_arr(b, X, i, j, arr):
    if i < 0 or j < 0:
        return
    if b[i][j] == '↖':
        get_lcs_arr(b, X, i - 1, j - 1, arr)
        arr.append(X[i])
    elif b[i][j] == '↑':
        get_lcs_arr(b, X, i - 1, j, arr)
    else:
        get_lcs_arr(b, X, i, j - 1, arr)


if __name__ == '__main__':
    parry = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]
    for k in range(1, 11):
        print(bottom_up_cut_rod(parry, k))
    s = [0, 0, 2, 4, 5, 7, 2, 1]
    print(elevatorSchedule(s))

    p = [30, 35, 15, 5, 10, 20, 25]
    matrix_order(p)
    x = ['A', 'B', 'D', 'A', 'C', 'K']
    y = ['B', 'D', 'D', 'E', 'C', 'K', 'M']
    lcs(x, y)
