# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     list_node_demo
   Description :
   Author :        patrick
   date：          2019/3/10
-------------------------------------------------
   Change Activity:
                   2019/3/10:
-------------------------------------------------
"""
from copy import deepcopy

__author__ = 'patrick'


class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next


def count_nodes(head):
    num = 0
    if head is None:
        return 0
    while head.next is not None:
        num +=1
        head = head.next

    return num


head = ListNode(123, ListNode(1,ListNode(12,ListNode(34))))

print(count_nodes(head))
