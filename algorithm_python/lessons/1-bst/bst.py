# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     bst
   Description :
   Author :        patrick
   date：          2019/8/3
-------------------------------------------------
   Change Activity:
                   2019/8/3:
-------------------------------------------------
"""
import random
from time import time

__author__ = 'patrick'


class BinaryNode:

    def __init__(self, value=None):
        self.value = value
        self.left = None
        self.right = None

    def add(self, val):
        if val <= self.value:
            if self.left:
                self.left.add(val)
            else:
                self.left = BinaryNode(val)
        else:
            if self.right:
                self.right.add(val)
            else:
                self.right = BinaryNode(val)

    def remove(self):
        if self.left is None and self.right is None:
            return None
        if self.left is None:
            return self.right
        if self.right is None:
            return self.left
        child = self.left
        grandchild = child.right
        if grandchild:
            while grandchild.right:
                child = grandchild
                grandchild = child.right
            self.value = grandchild.value
            child.right = grandchild.left
        else:
            self.left = child.left
            self.value = child.value

        return self

    def inorder(self):
        """In order traversal of tree rooted at given node."""
        if self.left:
            for n in self.left.inorder():
                yield n

        yield self.value

        if self.right:
            for n in self.right.inorder():
                yield n


class BinaryTree:

    def __init__(self):
        self.root = None

    def add(self, value):
        if self.root is None:
            self.root = BinaryNode(value)
        else:
            self.root.add(value)

    def __contains__(self, item):
        node = self.root
        while node:
            if item == node.value:
                return True
            if item < node.value:
                node = node.left
            else:
                node = node.right
        return False

    def contains(self, target):
        self.__contains__(target)

    def remove(self, value):
        if self.root:
            self.root = self.remove_from_parent(self.root, value)

    def remove_from_parent(self, parent, value):
        if parent is None:
            return None
        if value == parent.value:
            return parent.remove()
        elif value < parent.value:
            parent.left = self.remove_from_parent(parent.left, value)
        else:
            parent.right = self.remove_from_parent(parent.right, value)
        return parent


def performance():
    """Demonstrate execution performance"""
    n = 1024
    while n <= 65536:

        bt = BinaryTree()
        for i in range(n):
            bt.add(random.randint(1, n))

        now = time()
        bt.contains(random.randint(1, n))
        print(n, (time() - now) * 1000)

        n *= 2


if __name__ == '__main__':
    performance()
