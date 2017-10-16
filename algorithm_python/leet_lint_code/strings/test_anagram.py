# -*- coding:utf-8 -*-
from unittest import TestCase

from leet_lint_code.strings.valid_anagram import Solution


class TestSolution(TestCase):

    def setUp(self):
        self.solution=Solution()

    def test_with_duplicate_character(self):
        assert self.solution.anagram("abcd","abcda") is False

    def test_have_different_character(self):
        assert self.solution.anagram("abcd","abcds") is False

    def test_same_character_in_different_sequence(self):
        assert self.solution.anagram("abcd","badc") is True

    def test_empty_string(self):
        assert self.solution.anagram("acbd", "") is False

    def test_two_empty_string(self):
        assert self.solution.anagram("", "") is True