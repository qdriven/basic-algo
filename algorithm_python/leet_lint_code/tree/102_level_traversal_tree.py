# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     traversal_tree
   Description :
   Author :        patrick
   date：          2019/3/15
-------------------------------------------------
   Change Activity:
                   2019/3/15:
-------------------------------------------------
"""
import collections
from queue import Queue

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


__author__ = 'patrick'


# bfs + hashmap
def vertical_order_traversal(root):
    if root is None:
        return []

    dic = {}  ## result map: level: nodes in this level
    q = [(root, 0)]  ## put last level nodes in it
    while q:
        curr = q[0]
        if curr[1] not in dic:
            dic[curr[1]] = [curr[0].val]
        else:
            dic[curr[1]].append(curr[0].val)
        if curr[0].left is not None:
            q.append((curr[0].left, curr[1] - 1))
        if curr[0].right is not None:
            q.append((curr[0].right, curr[1] + 1))

    res = [t[1] for t in sorted(dic.items(), key=lambda x: x[0])]

    return res


# use deque to store level data
## last level nodes pop from left
## new add nodes appended
# leetcode:102
def level_order_traversal(root):
    if root is None:
        return []
    result,curr = [],[root]
    while curr:
        tmp,new_nodes = [],[]
        for node in curr:
            tmp.append(node.val)
            if node.left:
                new_nodes.append(node.left)
            if node.right:
                new_nodes.append(node.right)

        result.append(tmp)
        curr=new_nodes
    return result
