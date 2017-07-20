# -*- coding:utf-8 -*-
from unittest import TestCase

from arrays_strings import two_sum


class TestTowSum(TestCase):
    def setUp(self):
        self.solution = two_sum.Solution()

    def test_twoSum_arrayLessThan2(self):
        result = self.solution.twoSum([1], 2)
        self.assertEquals(result, [])

    def test_twoSum(self):
        result = self.solution.twoSum([1, 2, 5], 7)
        self.assertEquals(result, [1, 2])

    def test_twoSum_NoResult(self):
        result = self.solution.twoSum([1, 2, 5], 9)
        self.assertEquals(result, [])
