# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     003_lengthOfLongestSubstring
   Description :
   Author :        patrick
   date：          2019/8/4
-------------------------------------------------
   Change Activity:
                   2019/8/4:
-------------------------------------------------
"""
__author__ = 'patrick'


class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if not s:
            return 0
        if len(s) <= 1:
            return len(s)
        locations = [-1 for i in range(256)]
        index = -1
        m = 0
        for i, v in enumerate(s):
            if (locations[ord(v)] > index):
                index = locations[ord(v)]
            m = max(m, i - index)
            locations[ord(v)] = i
        return m

if __name__ == "__main__":
    assert Solution().lengthOfLongestSubstring("abcea") == 4