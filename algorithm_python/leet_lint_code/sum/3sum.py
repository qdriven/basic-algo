# -*- coding:utf-8 -*-

"""
iterate all the three element to find out all the sum is zero
combination


"""
import collections


class Solution(object):
    def threeSum_first(self, nums):
        """
        O(n^3)
        :param nums:
        :return:
        """
        nums.sort()
        sum_to_find = 0
        ele_num = 3
        result_mapping = {}
        result = []
        if not nums:
            return result

        for index_1 in range(len(nums) - 2):
            for index_2 in range(index_1 + 1, len(nums) - 1):
                for index_3 in range(index_2 + 1, len(nums)):
                    sum_result = sum([nums[index_1], nums[index_2], nums[index_3]])
                    if sum_result == sum_to_find:
                        added_array = [nums[index_1], nums[index_2], nums[index_3]]
                        added_array.sort()
                        result_mapping["".join(
                            [str(item) for item in added_array]
                        )] = added_array
                    if sum_result > sum_to_find:
                        break
        for k, v in result_mapping.items():
            result.append(v)
        return result

    def threeSum_final(self, nums):

        pass


if __name__ == '__main__':
    array = [1, 2, 3, 4, 5, 6]
    print(array[1:4])
    print(sum(array[1:4]))
    result = Solution().threeSum_first([0, -2, 3, 2, -3])
    print(result)
