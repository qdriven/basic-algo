# -*- coding:utf-8 -*-
from unittest import TestCase

from leet_lint_code.binary.valid_perfect_square import Solution


class TestSolution(TestCase):
    def setUp(self):
        self.solution=Solution()
    def test_isPerfectSquare(self):
        assert(self.solution.isPerfectSquare(5),False)

    def test_isPerfectSquare_TRUE(self):
        assert(self.solution.isPerfectSquare(16),True)