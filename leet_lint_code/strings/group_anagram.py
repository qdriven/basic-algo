# -*- coding:utf-8 -*-
"""

# Question:

Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.

# Answer

- 1. group by len(item),o(n)
- 2. compare each other,o(n)
"""


class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        result = []
        temp_keys={}
        for index,s in enumerate(strs):
            key = self._uq_keys(s)
            if key not in temp_keys:
                temp_keys[key]=[s]
            else:
                temp_keys[key].append(s)

        result = [ temp_keys[key] for key in temp_keys if len(temp_keys[key])>0]
        return result

    def _uq_keys(self,s):
        # d={}
        # result=[]
        # for item in s:
        #     d[item]=d.get(item,0)+1
        #
        # for char_num in range(ord('a'),ord('z')+1):
        #     c = chr(char_num)
        #     if c in d:
        #         result.append(c)
        #         result.append(str(d[c]))
        #
        # for char_num in range(ord('A'),ord('Z')+1):
        #     c = chr(char_num)
        #     if c in d:
        #         result.append(c)
        #         result.append(str(d[c]))
        #
        # return ''.join(result)
        return ''.join(sorted(s))