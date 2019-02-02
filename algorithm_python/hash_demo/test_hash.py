# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     test_hash
   Description :
   Author :        patrick
   date：          2019/2/2
-------------------------------------------------
   Change Activity:
                   2019/2/2:
-------------------------------------------------
"""
from hash_demo.hash_mod_demo import what_is_mod

__author__ = 'patrick'


class TestHashMethods(object):

    def test_what_is_mod(self):
        mod_num = what_is_mod(12)
        assert mod_num is 5
