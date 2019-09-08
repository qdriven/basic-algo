# 基础算法

- 数学相关
- 简单算法
- 基本数据结构
- 动态规划相关
- 排序


## 数学相关

- 是否是闰年

```python
def is_leap_year(year):
    """
    是否是闰年
    :param year:
    :return:
    """
    return (not year % 4 and year % 100) or (not year % 400)
```

- 最大公约数

```pyton
# 最大公约数，辗转相除法
def max_common_divisor(m, n):
    while True:
        remainder = m % n
        if not remainder:
            return n
        else:
            m, n = n, remainder
```

- 最小公倍数

两数相乘除以最大公约数，最大公约数算法参考上面方法
```python

def min_common_multiple(m, n):
    """
    最小公倍数
    :param m:
    :param n:
    :return:
    """
    return m * n / max_common_divisor(m, n)
```

- 素数判断

```python 
def is_prime(n):
    result = True
    for i in range(int(n / 2), 1, -1):
        if n % i == 0:
            result = False
            break
    return result
```

- 获取n的所有因子

```python
def get_factors(n):
    result = [n]
    for i in range(int(n / 2), 0, -1):
        if n % i == 0:
            result.append(i)
    return result
```

 ## 简单算法
 
 - 从文件中查找重复的单词，文件的每行只有一个单词
 
 ```python
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
```

- 从1到9，组成3个三位数，要求每个数字只用一次

Topic: 从1到9，组成3个三位数，要求每个数字只用一次，
要求结果第二个数是第一个数的两倍，第三个数是第一个数的三倍。求所有的组合

算法思想：
使用三层循环先计算第一个数each1，要求三个位不一样
然后先计算符合倍数关系的第二个数each2=2*each1，第三个数each3=3*each1，
然后判断each1、each2和each3这三个数是否每个位都各不相同，
这个将它们拆成单个字符然后放入集合中，如果集合个数=9就符合条件

```python

def nine_number():
    nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    result = []
    for i in nine:
        each1 = 0
        each1 += i * 100
        for j in nine:
            if j == i: continue
            each1 += j * 10
            for k in nine:
                if k == j or k == i: continue
                each1 += k
                each2 = 2 * each1
                each3 = 3 * each1
                if each2 > 999 or each3 > 999: continue
                all_num = []
                all_num.extend(list(str(each1)))
                all_num.extend(list(str(each2)))
                all_num.extend(list(str(each3)))
                num_set = set(all_num)
                if len(num_set) == 9:
                    result.append((each1, each2, each3))
    return result
```

- 多项求值

Desc : Horner多项式求值算法
   P(x) = Σ(k=0,n)a(k)x^k = a0 + x(a1 + x(a2+ ... + x(an-1 + x*an)...))

```python
def hornerPoly(coefficientArr, x):
    res = 0
    for i in range(len(coefficientArr))[-1::-1]:
        res = coefficientArr[i] + x * res
    return res
```   

- 寻找最大子数组

Desc : 寻找最大子数组
        寻找数组A的和最大的非空连续的子数组
        假定寻找子数组A[low..high]的最大子数组，使用分治法将A划分为两个规模尽量相等的子数组
        A[low..middle]和A[middle+1..high]，那么A[low..high]的任何连续子数组必须是下来三种之一：
        1， 完全位于A[low..middle]中，即low<=i<=j<=middle
        2， 完全位于A[middle+1..high]中，即middle<i<=j<=high
        3， 跨越了中点，因此low<=i<=middle<j<=high


```python
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
```

- 输入字符串，判断是否是合法的括号组合

Topic: 输入字符串，判断是否是合法的括号组合
    大括号{}，中括号[]，小括号()的合法匹配
    比如{[()()]}合法，但是[{()(})]不合法

使用stack,如果当前字符是左括号，入stack保存，如果当前字符是右括号，检查stack最上面元素
是否是对应的左括号，如果是则继续，如果不是就是非法

```python
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
```

## 基本数据结构

- 二叉搜索树
   Desc : 二叉搜索树
        二叉搜索树是指：对每个节点，其左子树元素不大于它，右子树元素不小于它

```python

class Tree():
    def __init__(self, root=None):
        self.root = root


class Node():
    """节点元素定义"""

    def __init__(self, key, p=None, left=None, right=None):
        self.key = key
        self.p = p
        self.left = left
        self.right = right


def inOrderWalk(tree):
    """中序遍历二叉搜索树，从小到大输出元素"""
    inOrderWalkNode(tree.root)
    print('')


def inOrderWalkNode(node):
    """中序遍历二叉搜索树，从小到大输出元素"""
    if node:
        inOrderWalkNode(node.left)
        print(node.key),
        inOrderWalkNode(node.right)


def treeSearch(tree, x):
    """二叉树搜索，递归版本"""
    root = tree.root
    if not root or x == root.key:
        return root
    if x < root.key:
        return treeSearch(root.left, x)
    else:
        return treeSearch(root.right, x)


def treeSearch2(tree, x):
    """"二叉树搜索，迭代版本"""
    root = tree.root
    while root and x != root.key:
        if x < root.key:
            root = root.left
        else:
            root = root.right
    return root


def treeMinimum(node):
    while node.left:
        node = node.left
    return node


def treeMaximum(node):
    while node.right:
        node = node.right
    return node


def nextNode(node):
    """查找后继节点"""
    if node.right:
        return treeMinimum(node.right)
    p = node.p
    while p and node == p.right:
        node = p
        p = node.p
    return p


def preNode(node):
    """查找前驱节点"""
    if node.left:
        return treeMaximum(node.left)
    p = node.p
    while p and node == p.left:
        node = p
        p = node.p
    return p


def treeInsert(tree, node):
    """二叉搜索树的插入算法"""
    y = None
    root = tree.root
    while root:
        y = root
        if node.key < root.key:
            root = root.left
        else:
            root = root.right
    node.p = y
    if y is None:  # empty tree
        tree.root = node
    elif node.key < y.key:
        y.left = node
    else:
        y.right = node


def treeDelete(T, z):
    """
    二叉搜索树的删除算法
    算法思想：
    1，如果z没有孩子节点，简单简单的将其删除，并修改它的父节点，用None作为孩子来替换
    2，如果z只有一个孩子，那么将这个孩子提升到树中z的位置，并修改z的父节点，用z的孩子替换z
    3，如果z有两个孩子，那么寻找z的后继节点y（一定在z的右子树中），找到后：
        i：如果y是z的右孩子，那么用y替换z，并仅留下y的右孩子。（y肯定没有左孩子）
        ii：否则，先用y的右孩子替换，然后再用y替换z
    """
    if z.left is None:
        transplant(T, z, z.right)
    elif z.right is None:
        transplant(T, z, z.left)
    else:
        y = treeMinimum(z.right)
        if y.p != z:
            transplant(T, y, y.right)
            y.right = z.right
            y.right.p = y
        transplant(T, z, y)
        y.left = z.left
        y.left.p = y


def transplant(T, u, v):
    """子树替换：在树T中用根节点节点为v的子树替换根节点为u的子树"""
    if u.p is None:
        T.root = v
    elif u == u.p.left:
        u.p.left = v
    else:
        u.p.right = v
    if v:
        v.p = u.p


if __name__ == '__main__':
    ss = [4, 23, 65, 22, 12, 3, 7, 1, 256, 34, 27]
    tree = Tree()
    for i in ss:
        treeInsert(tree, Node(i))
    n = Node(26)
    treeInsert(tree, n)
    inOrderWalk(tree)
    treeDelete(tree, n)
    inOrderWalk(tree)
    
```

- 红黑树
Desc : 红黑树
红黑树是满足下面红黑性质的二叉搜索树：
1，每个结点或者是红色的，或者是黑色的
2，根结点黑色
3，每个叶子结点（None）是黑色的
4，如果一个结点是红色的，则它的两个子结点都是黑色的
5，对每个结点，从该结点到其所有后代叶结点的简单路径上，均包含相同数目的黑色结点。
一个有n个内部结点的红黑树的高度最多为2lg(n+1)

```python
class RBTree():
    COLOR_RED = 0
    COLOR_BLACK = 1

    def __init__(self, root=None):
        self.root = root
        self.nil = RBNode('', RBTree.COLOR_BLACK)
        if root is None:
            self.root = self.nil


class RBNode():
    """节点元素定义"""

    def __init__(self, key, color=RBTree.COLOR_RED, p=None, left=None, right=None):
        self.key = key
        self.color = color
        self.p = p
        self.left = left
        self.right = right


def leftRotate(T, x):
    """
    左旋：
        假设x的右孩子为y，且不为None，以x到y的链作为支轴，
        使y成为该子树新的根结点，x成为y的左孩子，y的左孩子成为x的右孩子
    """
    y = x.right
    x.right = y.left
    if y.left != T.nil:
        y.left.p = x
    y.p = x.p
    if x.p == T.nil:
        T.root = y
    elif x == x.p.left:
        x.p.left = y
    else:
        x.p.right = y
    y.left = x
    x.p = y


def rightRotate(T, x):
    y = x.left
    x.left = y.right
    if y.right != T.nil:
        y.right.p = x
    y.p = x.p
    if x.p == T.nil:
        T.root = y
    elif x == x.p.left:
        x.p.left = y
    else:
        x.p.right = y
    y.right = x
    x.p = y


def rbTreeInsert(T, z):
    """
     红黑树的插入算法
    """
    RED = RBTree.COLOR_RED
    y = T.nil
    x = T.root
    while x != T.nil:
        y = x
        if z.key < x.key:
            x = x.left
        else:
            x = x.right
    z.p = y
    if y == T.nil:
        T.root = z
    elif z.key < y.key:
        y.left = z
    else:
        y.right = z
    z.left = T.nil
    z.right = T.nil
    z.color = RED
    rbInsertFixup(T, z)


def rbInsertFixup(T, z):
    """给结点重新着色，将其保持为红黑树"""
    RED = RBTree.COLOR_RED
    BLACK = RBTree.COLOR_BLACK
    while z.p.color == RED:
        if z.p == z.p.p.left:
            y = z.p.p.right
            if y.color == RED:
                z.p.color = BLACK
                y.color = BLACK
                z.p.p.color = RED
                z = z.p.p
            else:
                if z == z.p.right:
                    z = z.p
                    leftRotate(T, z)
                z.p.color = BLACK
                z.p.p.color = RED
                rightRotate(T, z.p.p)
        elif z.p == z.p.p.right:
            y = z.p.p.left
            if y.color == RED:
                z.p.color = BLACK
                y.color = BLACK
                z.p.p.color = RED
                z = z.p.p
            else:
                if z == z.p.left:
                    z = z.p
                    rightRotate(T, z)
                z.p.color = BLACK
                z.p.p.color = RED
                leftRotate(T, z.p.p)
    T.root.color = BLACK


def rbTransplant(T, u, v):
    """红黑树中子树的替换算法"""
    if u.p == T.nil:
        T.root = v
    elif u == u.p.left:
        u.p.left = v
    else:
        u.p.right = v
    v.p = u.p


def rbTreeDelete(T, z):
    """红黑树删除算法"""
    BLACK = RBTree.COLOR_BLACK
    y = z
    yOriginalColor = y.color
    if z.left == T.nil:
        x = z.right
        rbTransplant(T, z, z.right)
    elif z.right == T.nil:
        x = z.left
        rbTransplant(T, z, z.left)
    else:
        y = treeMinimum(z.right)
        yOriginalColor = y.color
        x = y.right
        if y.p == z:
            x.p = y
        else:
            rbTransplant(T, y, y.right)
            y.right = z.right
            y.right.p = y
        rbTransplant(T, z, y)
        y.left = z.left
        y.left.p = y
        y.color = z.color
    if yOriginalColor == BLACK:
        rbDeleteFixup(T, x)


def rbDeleteFixup(T, x):
    """红黑树删除时的调整算法"""
    RED = RBTree.COLOR_RED
    BLACK = RBTree.COLOR_BLACK
    while x != T.root and x.color == BLACK:
        if x == x.p.left:
            w = x.p.right
            if w.color == RED:
                w.color = BLACK
                x.p.color = RED
                leftRotate(T, x.p)
                w = x.p.right
            if w.left.color == BLACK and w.right.color == BLACK:
                w.color = RED
                x = x.p
            else:
                if w.right.color == BLACK:
                    w.left.color = BLACK
                    w.color = RED
                    rightRotate(T, w)
                    w = x.p.right
                w.color = x.p.color
                x.p.color = BLACK
                w.right.color = BLACK
                leftRotate(T, x.p)
                x = T.root
        elif x == x.p.right:
            w = x.p.left
            if w.color == RED:
                w.color = BLACK
                x.p.color = RED
                rightRotate(T, x.p)
                w = x.p.left
            if w.left.color == BLACK and w.right.color == BLACK:
                w.color = RED
                x = x.p
            else:
                if w.left.color == BLACK:
                    w.right.color = BLACK
                    w.color = RED
                    leftRotate(T, w)
                    w = x.p.left
                w.color = x.p.color
                x.p.color = BLACK
                w.left.color = BLACK
                rightRotate(T, x.p)
                x = T.root
    x.color = BLACK


def inOrderRBWalk(tree):
    """中序遍历二叉搜索树，从小到大输出元素"""
    inOrderRBWalkNode(tree.root, tree.nil)
    print('')


def inOrderRBWalkNode(node, ni):
    """中序遍历二叉搜索树，从小到大输出元素"""
    if node and node != ni:
        inOrderRBWalkNode(node.left, ni)
        print(node.key),
        inOrderRBWalkNode(node.right, ni)

if __name__ == '__main__':
    ss = [4, 23, 65, 22, 12, 3, 7, 1, 256, 34, 27]
    tree = RBTree()
    for i in ss:
        rbTreeInsert(tree, RBNode(i))
    inOrderRBWalk(tree)
    n = RBNode(26)
    rbTreeInsert(tree, n)
    inOrderRBWalk(tree)
    rbTreeDelete(tree, n)
    inOrderRBWalk(tree)
```

- 环队列

n个人围成一圈，从某个指定人开始，沿着环将遇到的每第m个人移出去。
        每个人移出去后，继续沿着环将剩下的人按同样规则移出去
        默认队列第一个编号为1，以此类推。。。

```python
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
```

- 动态切钢
Topic: 动态规划，切割钢管，使得收益最大化
给定一段长度为n的钢条和一个价格表p[i](i=1,2,3,4...n)，
求切割方案，使得销售收益r[n]最大。
注意，如果长度为n的钢条价格p[n]足够大，最优解可能是完全不需要切割。

```python

def bottom_up_cut_rod(p, n):
    """自底向上版本的动态规划，自底向上时间复杂性函数通常具有更小的系数
    自底向上版本采用子问题的自然顺序，若i<j，则规模为i的子问题比规模为j的子问题更小。
    因此，过程依次求解规模为j=0,1...n的子问题

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
```

- 最优矩阵链乘
Topic: 动态规划：最优矩阵链乘法括号化算法
Desc :
    对于矩阵A1A2...An相乘，由于满足结合律，求一个最优括号算法使得计算的次数最少
    对于矩阵Ai*Aj的计算次数为：p[i-1]*p[i]*p[j]，row(左)*column(左)*column(右)
    算法思路：
    给定一个序列p:<p[0],p[1],p[2]...p[n]>，对每个Ai<p[i-1],p[i]>
    定义一个n*n二维数组m，其中m[i,j]=min(i<= k < j){m[i,k]+m[k+1,j]+p[i-1]*p[k]*p[j]}

```python
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

if __name__ == '__main__':
    p = [30, 35, 15, 5, 10, 20, 25]
    matrix_order(p)
```

- 电梯调度算法
    Desc : 电梯调度算法
        电梯停在哪一层楼，能够保证这次乘坐电梯的所有乘客爬楼梯的层数之和最少
        这个属于动态规划问题
        动态规划。假设电梯停在第x层，已知目的楼层
        在x层以下的有N1人,
        在x层的有N2人，
        在x层以上的有N3人。
        此时总花费为sum。
        则往上走一层的话，总花费变为sum + N2 + N1 - N3。
        那么初始状态电梯停在第一层，向上进行状态的变迁，开始时N2 + N1 - N3 < 0。
        sum越来越小，直到某一层N2 + N1 >= N3，就没有必要在往上走了。
        这时已求出最合适的楼层了

```python
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
```    


- 一个子序列代表，将一个序列中去掉若干元素后得到的序列，可以间隔。
    公共子序列就是，序列A和序列B的公共子序列
    最长公共子序列就是，公共子序列里面长度最长的。

    思路：
    接受两个序列<x1,x2,...xm>和<y1,y2,...yn>作为输入
    将两个序列安装下标变成矩阵或者是二维数组c(m+1 * n+1)
    按行主次序(row-major-order)计算表项，即首先计算C的第一行，然后是第二行。。
    另外还维护一个二维数组b(m * n)，b[i,j]指向的表项对应计算c[i,j]时选择的子问题最优解
    c[m-1][n-1]保存了X和Y的LCS的长度
   
```pythondef lcs(arr1, arr2):
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
    x = ['A', 'B', 'D', 'A', 'C', 'K']
    y = ['B', 'D', 'D', 'E', 'C', 'K', 'M']
    lcs(x, y)
```

## 排序

- 插入排序
   Desc : 插入排序
        由于其内层循环非常紧凑，对于小规模的输入，
        插入排序是一种非常快的原址排序算法
        注： 如果输入数组中仅有常数个元素需要在排序过程中存储在数组外，
            则称这种排序算法是原址的。
 
```python
def insertSort(seq):
    for j in range(1, len(seq)):
        key = seq[j]
        # insert arrays[j] into the sorted seq[0...j-1]
        i = j - 1
        while i >= 0 and seq[i] > key:
            seq[i + 1] = seq[i]
            i -= 1
        seq[i + 1] = key
```

- 归并排序
        归并排序算法完全遵循分治模式，操作如下：
        分解： 分解待排序的n个元素序列成各具n/2个元素的两个子序列
        解决： 使用归并排序递归的排序两个子序列
        合并： 合并两个已排序的子序列以产生已排序的答案

```python
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

```

- 堆排序
        堆排序的时间复杂度是O(nlg(n))，并且具有空间原址性
        二叉堆heap是一种数据结构，可用来实现优先队列
        给定一个节点的下标i(下标从0开始)，则其父节点、坐孩子、右孩子坐标：
        parent(i) = floor((i+1)/2 - 1) = ((i + 1) >> 1) - 1
        left(i) = 2*i + 1 = (i << 1) + 1
        right(i) = 2*i + 2 = (i + 1) << 1

        最小堆定义： 所有i必须满足A[parent(i)] <= A[i]
        最大堆定义： 所有i必须满足A[parent(i)] >= A[i]

        在堆排序中，我们使用最大堆
        在优先队列算法中，使用最小堆
        
```python
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
```

- 快速排序
        采用分治法思想：
        分解： 将数组A[p..r]划分成两个(也可能是空)的子数组A[p..q-1]和A[q+1..r]，
            使得左边数组中的元素都小于A[p]，而右边数组元素都大于A[p]
        解决： 通过递归调用快速排序，对子数组A[p..q-1]和A[q+1..r]进行排序
        合并： 原址排序，不需要合并，数组已经排好序了

        快速排序的优点：
        最坏情况下时间复杂度为O(n^2)，但是期望时间是O(nlg(n))，
        而且O(nlg(n))隐含常数因子非常的小，而且还是原址排序，
        所以实际中使用最多的排序算法就是快速排序
 
```python
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
```

- 桶排序
        桶排序假设数据服从均匀分布，平均情况下它的代价为O(n)
        桶排序假定输入是由一个随机过程产生，该过程将元素均匀、独立分布在[0,1)区间上
        将[0,1)区间划分成n个相同大小的子区间，称为桶。然后将n个输入数分别放入桶中
        然后循环n个桶，对每个桶排序，采用插入排序算法

```python
def bucketSort(A):
    n = len(A)
    B = [[] for i in range(n)]
    for i in range(0, n):
        ind = int(floor(n * A[i]))
        B[ind].append(A[i])
    for i in range(0, n):
        insertSort(B[i])
    res = []
    for i in range(0, n):
        res.extend(B[i])
    A[:] = res[:]


if __name__ == '__main__':
    AA = [9, 15, 17, 10, 16, 3, 14, 12, 1, 4]
    BB = [i / 20.0 for i in AA]
    print(BB)
    bucketSort(BB)
    print(BB)
```


- 在数组中同时找出最小和最大的
        算法描述：如果n是奇数，最小和最大初始化为第一个元素，
        如果是偶数，先对前两个元素比较，决定最小和最大初值。

```python
def minMax(A):
    n = len(A)
    if n % 2 == 0:
        lastMin, lastMax = (A[0], A[1]) if A[0] < A[1] else (A[1], A[0])
    else:
        lastMin = lastMax = A[0]
    for i in range(0, (n + 1)//2-1):
        tmp1 = A[2 * i + 1]
        tmp2 = A[2*i + 2]
        tmpMin, tmpMax = (tmp1, tmp2) if tmp1 < tmp2 else (tmp2, tmp1)
        lastMin = lastMin if lastMin < tmpMin else tmpMin
        lastMax = lastMax if lastMax > tmpMax else tmpMax
    return lastMin, lastMax


if __name__ == '__main__':
    print(minMax([4, 23, 65, 22, 12, 4, 1, 1, 256, 34, 27]))

```

