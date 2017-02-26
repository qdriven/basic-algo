# -*- coding:utf-8 -*-
"""
# Question:

写出一个函数 anagram(s, t) 判断两个字符串是否可以通过改变字母的顺序变成一样的字符串。

# Answer

## 1. 第一个思路：如果不考虑额外的内存空间的话
1. 将string 转换为map(dict)， key=字符，value=字符出现的次数
2. 比较两个map(dict)就可以了

## 2. 优化

- 边界条件验证
- 在第二个字符串循环时候，可以直接进行比较

# Original

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.
Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

"""


class Solution:
    """
    @param s: The first string
    @param b: The second string
    @return true or false
    """

    def anagram(self, s, t):
        # if len(s) != len(t): return False
        s_dict = {}
        t_dict = {}
        for item in s:
            s_dict[item] = s_dict.get(item, 0) + 1
        for item in t:
            t_dict[item] = t_dict.get(item, 0) + 1

        return s_dict == t_dict

