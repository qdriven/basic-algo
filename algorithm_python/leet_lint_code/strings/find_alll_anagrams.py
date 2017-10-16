# -*- coding:utf-8 -*-

"""
# Question

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

# Answer

个人思路1：

1. 边界条件：
   * len(s) < len(p) return nothing
   * len(s)==len(p)
2. 比较
   * sorted p
   * 循环获取和p长度一样的字符串，和p进行比较
"""


class Solution(object):
    def findAnagrams_exceed_timelimit(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """

        if len(p) > len(s): return
        p = sorted(p)
        result = []
        if len(p) == len(s):
            s = sorted(s)
            if s == p:
                return [0]
        for i in range(0, len(s) - len(p) + 1):
            if p == sorted(s[i:i + len(p)]):
                result.append(i)

        return result

    def _string_to_map(self, text):
        result = {}
        for item in text:
            result[item] = result.get(item, 0) + 1
        return result

    def findAnagrams_exceed_too(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
        print(len(p))
        print(len(s))
        if len(p) > len(s): return []
        ref = self._string_to_map(p)
        result = []
        slice_map = {}
        if len(p) == len(s):
            compared = self._string_to_map(s)
            if compared == ref:
                return [0]
        for i in range(0, len(s) - len(p) + 1):
            print(i)
            print(hash(s[i:i + len(p)]))
            print(hash(p))
            if slice_map.get(s[i:i + len(p)]) is None:
                print("not in slice_map")
                print(p==(s[i:i + len(p)]))
                print(type(p))
                print(type(s[i:i+len(p)]))
                print(len(p))
                print(len(s[i:i + len(p)]))
                slice_map[s[i:i + len(p)]] = 1
                if ref == self._string_to_map(s[i:i + len(p)]):
                    result.append(i)
            else:
                result.append(i)
        return result

    def findAnagrams(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
        res = []
        n, m = len(s), len(p)
        if n < m: return res
        phash, shash = [0]*123, [0]*123
        for x in p:
            phash[ord(x)] += 1
        for x in s[:m-1]:
            shash[ord(x)] += 1
        for i in range(m-1, n):
            shash[ord(s[i])] += 1
            if i-m >= 0:
                shash[ord(s[i-m])] -= 1
            if shash == phash:
                res.append(i - m + 1)
        return res
#
# if __name__ == '__main__':
#     slice_map={}
#     result=[]
#     result1=[]
#     for i in range(0,10000):
#         result.append('a')
#         result1.append('a')
#     slice_map[str(result)]=1
#     print(slice_map[str(result1)])
