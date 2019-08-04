# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     uber_hash_function_128
   Description :
   Author :        patrick
   date：          2019/8/4
-------------------------------------------------
   Change Activity:
                   2019/8/4:
-------------------------------------------------
"""
import math

__author__ = 'patrick'
"""
In data structure Hash, hash function is used to convert a string(or any other type) into an integer smaller than hash size and bigger or equal to zero. The objective of designing a hash function is to "hash" the key as unreasonable as possible. A good hash function can avoid collision as less as possible. A widely used hash function algorithm is using a magic number 33, consider any string as a 33 based big integer like follow:

hashcode("abcd") = (ascii(a) * 333 + ascii(b) * 332 + ascii(c) *33 + ascii(d)) % HASH_SIZE 

                              = (97* 333 + 98 * 332 + 99 * 33 +100) % HASH_SIZE

                              = 3595978 % HASH_SIZE

here HASH_SIZE is the capacity of the hash table (you can assume a hash table is like an array with index 0 ~ HASH_SIZE-1).

Given a string as a key and the size of hash table, return the hash value of this key.
"""


class Solution:

    def hashCode(self, key, HASH_SIZE):
        # key_len = len(key)
        # key_arr = list(key)
        # before_hashed = 0
        # for i in range(key_len):
        #     powed= math.pow(33,key_len-i-1)
        #     before_hashed = ord(key_arr[i])* powed + before_hashed
            # print(before_hashed)
        ans =0
        for x in key:
            ans = (ans*33+ord(x))%HASH_SIZE
        return ans

if __name__ == '__main__':
    result = Solution().hashCode("abcdefghijklmnopqrstuvwxyz", 69)
    print(result)
