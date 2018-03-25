# -*- coding:utf-8 -*-

class Solution(object):
    def maxProfit(self, prices):

        if not prices:
            return 0
        max_profit = 0
        for i in range(1, len(prices)):
            if prices[i] > prices[i - 1]:
                max_profit += prices[i] - prices[i-1]

        return max_profit


if __name__ == '__main__':
    s = Solution()
    print(s.maxProfit([1,2,4]))