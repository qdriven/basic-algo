# -*- coding:utf-8 -*-
import random
from time import time


class Node:
    """
    Binary Search Tree Node
    """

    def __init__(self, value=None):
        """
        init Node, value is the node the value
        node.left is None default
        node.right is None default
        :param value:
        """
        self.value = value
        self.left = None
        self.right = None

    def add(self, val):
        if val <= self.value:
            self._add_node(self.left, val)
        else:
            self._add_node(self.right, val)

    @classmethod
    def _add_node(cls, node, val):
        if node:
            node.add(val)
        else:
            node = Node(val)

    def delete(self):
        if self.left == self.right is None:
            return None
        if self.left is None:
            return self.right
        if self.right is None:
            return self.left

        child = self.left
        grand_child = self.left.right
        if grand_child:
            while grand_child.right:
                child = grand_child
                grand_child = child.right
            self.value = grand_child.value
            child.right = grand_child.left
        else:
            self.left = child.left
            self.value = child.value
        return self

    def in_order(self):
        """
        in order traversal for tree rooted at give node
        :return:
        """
        if self.left:
            for n in self.left.in_order():
                yield n

        yield self.value

        if self.right:
            for n in self.right.in_order():
                yield n


class BinaryTree:
    def __init__(self):
        self.root = None

    def add(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            self.root.add(value)

    def contains(self, target):
        node = self.root
        while node:
            if target == node.value:
                return True
            if target < node.value:
                node = node.left
            else:
                node = node.right

        return False

    def remove(self, value):
        if self.root:
            self.root = self._remove_from_parent(self.root, value)

    def _remove_from_parent(self, parent, value):
        if parent is None:
            return None

        if value == parent.value:
            return parent.delete()
        elif value < parent.value:
            parent.left = self._remove_from_parent(parent.left, value)
        else:
            parent.right = self._remove_from_parent(parent.right, value)

    def __iter__(self):
        if self.root:
            return self.root.in_order()


def performance():
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
