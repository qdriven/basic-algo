# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     topic_tree
   Description :   https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/992/
   Author :        patrick
   date：          2019/3/15
-------------------------------------------------
   Change Activity:
                   2019/3/15:
-------------------------------------------------
"""
__author__ = 'patrick'

"""
Pre-order traversal is to visit the root first. Then traverse the left subtree.
Finally, traverse the right subtree.
For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
"""


# root, then left , then right
def per_order_tree_traveral(root):
    """
    root,left first, then right
    :param node:
    :return:
    """
    path = []
    if root is None:
        return path
    stack = []
    stack.append(root)
    while stack:
        root = stack.pop()
        path.append(root.val)
        if root.right is not None:
            stack.append(root.right)
        if root.left is not None:
            stack.append(root.left)
    return path


# traverse left first, then root ,then right
"""
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
In-order traversal is to traverse the left subtree first. Then visit the root. Finally, traverse the right subtree.

"""


def in_order_tree_traveral(root):
    path = []
    if root is None:
        return path
    stack = []
    while stack or root is not None:
        if root is not None:
            stack.append(root)
            root = root.left
        else:
            root = stack.pop()
            path.append(root.val)
            root = root.right
    return path


def in_order_tree_traversal_2(root):
    stack = []
    result = []
    curr = root
    while curr:
        if curr.left:
            stack.append(curr)
            curr = curr.left
        elif curr.right:
            result.append(curr.val)
            curr = curr.right
        else:
            result.append(curr.val)
            pre = stack.pop()
            if not pre:
                break
            result.append(pre.val)
            while pre:
                if pre.right:
                    curr = pre.right
                    break
                elif stack:
                    pre = stack.pop()
                    result.append(pre.val)
                else:
                    curr = None
                    break
    return result


result = []


def in_order_traversal_recursive(root):
    if root:
        in_order_traversal_recursive(root.left)
        result.append(root.val)
        in_order_traversal_recursive(root.right)

    return result


# left,right,finally root
def post_order_tree_traveral(root):
    """
    :type root: TreeNode
    :rtype: List[int]
    """
    path = []
    if root is None:
        return path
    stack1 = []
    stack2 = []
    stack1.append(root)
    while stack1:
        root = stack1.pop()
        stack2.append(root.val)
        if root.left is not None:
            stack1.append(root.left)
        if root.right is not None:
            stack1.append(root.right)
    while stack2:
        path.append(stack2.pop())
    return path


class Solution(object):
    def postorderTraversal(self, root):
        self.res = []
        self.dfs(root)
        return self.res

    def dfs(self, root):
        if not root:
            return
        self.dfs(root.left)
        self.dfs(root.right)
        self.res.append(root.val)


class SolutionStack(object):
    def postorderTraversal(self, root):
        stack, res = [], []
        while stack or root:
            if root:
                stack.append(root)
                res.append(root.val)
                root = root.right  # 先加右边，在左边。
            else:
                node = stack.pop()
                root = node.left
        return res[::-1]


class SolutionFlag(object):
    def postorderTraversal(self, root):
        res, stack = [], [(root, False)]
        while stack:
            node, visited = stack.pop()
            if node:
                if visited:
                    res.append(node.val)
                else:
                    stack.append((node, True))
                    stack.append((node.right, False))
                    stack.append((node.left, False))
        return res

    # BFS
    # top-down/bottom-up
    """
         if not root:
            return 0
        else:
            return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
    """

    def minDepth(self, root):
        if root is None:
            return 0
        if root.left is None and root.right is None:
            return 1
        elif root.left is None and root.right is not None:
            return self.minDepth(root.right) + 1
        elif root.left is not None and root.right is None:
            return self.minDepth(root.left) + 1
        else:
            left_min = self.minDepth(root.left)
            right_min = self.minDepth(root.right)
            return min(left_min, right_min)


def symmetric_tree(root):
    def is_symmetric(root):
        def _is_symmetric(left, right):

            if left is None and right is None:
                return True
            if left is not None and right is not None:
                return (left.val == right.val and
                        _is_symmetric(left.left, right.right) and
                        _is_symmetric(left.right, right.left))
            return False

        if root is None:
            return True
        if root.left is None and root.right is None:
            return True

        if root.left is not None and root.right is not None:
            return _is_symmetric(root.left, root.right)
        return False


def path_sum(root, sum):
    if root is None:
        return False
    elif root.left is None and root.right is None:
        if sum == root.val:
            return True
        else:
            return False
    else:
        sum -= root.val
        return path_sum(root.left, sum) or path_sum(root.right, sum)
