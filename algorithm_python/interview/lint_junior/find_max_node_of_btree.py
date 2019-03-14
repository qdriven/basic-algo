# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     find_max_node_of_btree
   Description :
   Author :        patrick
   date：          2019/3/13
-------------------------------------------------
   Change Activity:
                   2019/3/13:
-------------------------------------------------
"""
__author__ = 'patrick'


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None


def find_max(node):
    max = node.val
    ## travers every level of tree
    if node.left is not None:
        if node.left.val > max:
            max = node.left.val
    if node.right is not None:
        if node.right.val > max:
            max = node.right.val
    return max

class Solution:

    def maxNode(self,root):
        max = find_max(root)




def find_left(node):
    if node.left is None:
        return


def find_right(node):
    pass
