# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     632_max_node_value
   Description :
   Author :        patrick
   date：          2019/3/15
-------------------------------------------------
   Change Activity:
                   2019/3/15:
-------------------------------------------------
"""
__author__ = 'patrick'


def maxNode(root):
    if root is None:
        return root
    result, curr = [], [root]
    max_node = root
    while curr:
        new_nodes = []
        for node in curr:
            if node.left:
                new_nodes.append(node.left)
                if node.left.val > max_node.val:
                    max_node = node.left
            if node.right:
                new_nodes.append(node.right)
                if node.right.val > max_node.val:
                    max_node = node.right
        curr = new_nodes
    return max_node
