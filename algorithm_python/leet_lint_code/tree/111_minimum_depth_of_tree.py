# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     111_minimum_depth_of_tree
   Description :
   Author :        patrick
   date：          2019/3/15
-------------------------------------------------
   Change Activity:
                   2019/3/15:
-------------------------------------------------
"""
__author__ = 'patrick'

# BFS
def minDepth(root):
    if root is None:
        return 0
    level,nodes = 1,[root]
    while nodes:
        tmp, new_nodes = [], []
        for node in nodes:
            if node is None:
                return level
            if node.left is None and node.right is None:
                return level
            tmp.append(node.val)
            if node.left:
                new_nodes.append(node.left)
            if node.right:
                new_nodes.append(node.right)

        nodes = new_nodes
        level +=1
    return level
