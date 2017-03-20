# -*- coding:utf-8 -*-
from unittest import TestCase

from algo_in_python.auto_resize_list import AutoResizeList


class TestAutoResizeList(TestCase):

    def test_set(self):
        a = AutoResizeList()
        a[5]=5
        self.assertEqual(a._data,[None, None, None, None, None, 5])

    def test_fill(self):
        a=AutoResizeList(fill=100)
        a[2]=4
        self.assertEqual(a[1],100)
        self.assertEqual(a[2],4)
        self.assertEqual(len(a),3)

    def test_del(self):
        a = AutoResizeList([1,2,3,4,5])
        del a[3]
        self.assertEqual(a._data,[1,2,3,5])

    def test_equal(self):
        a = AutoResizeList([1, 2, 3])
        b = AutoResizeList([1, 2, 3])
        c=[1,2,3]
        self.assertEqual(a,b)
        self.assertEqual(a,c)

    def test_len(self):
        a = AutoResizeList([1, 2, 3])
        a[10]=5
        self.assertEqual(len(a),11)

    def test_get(self):
        a = AutoResizeList([1, 2, 3])
        self.assertEqual(a[2],3)
        self.assertEqual(a[3],None)
    def test_prepend(self):
        a = AutoResizeList([1, 2, 3])
        a.prepend(0)
        self.assertEqual(a[0],0)

    def test_append(self):
        a = AutoResizeList([1, 2, 3])
        a.append(5)
        self.assertEqual(len(a),4)