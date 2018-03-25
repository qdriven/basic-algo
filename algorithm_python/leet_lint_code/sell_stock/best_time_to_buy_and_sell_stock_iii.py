# -*- coding:utf-8 -*-

"""
Thought:
"""


class Solution(object):
    def maxProfit(self, prices):
        max_profit = 0
        if not prices:
            return 0
        last_elem = 0
        elem_count = len(prices)
        for i, price in enumerate(prices):
            inner_loop = 0
            last_elem = price

            while inner_loop < (elem_count - i - 1):
                max_profit = max(max_profit, prices[i + inner_loop + 1] - price)
                inner_loop += 1
        return max_profit

    def maxP2(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if not prices:
            return 0
        n = len(prices)
        m1 = [0] * n
        m2 = [0] * n
        max_profit1 = 0
        min_price1 = prices[0]
        max_profit2 = 0
        max_price2 = prices[-1]
        for i in range(n):
            max_profit1 = max(max_profit1, prices[i] - min_price1)
            m1[i] = max_profit1
            min_price1 = min(min_price1, prices[i])
        for i in range(n):
            max_profit2 = max(max_profit2, max_price2 - prices[n - 1 - i])
            m2[n - 1 - i] = max_profit2
            max_price2 = max(max_price2, prices[n - 1 - i])
        max_profit = 0
        for i in range(n):
            max_profit = max(m1[i] + m2[i], max_profit)
        return max_profit


if __name__ == '__main__':
    s = Solution()
    print(s.maxProfit([1, 12, 5, 0, 13]))
    print(s.maxP2([1, 12, 5, 0, 13]))
    print(s.maxProfit([1, 2, 4]))
    print(s.maxP2([1, 12, 5, 5, 13]))
    print(s.maxProfit([2, 1, 2, 0, 1]))
    print(s.maxP2([2, 1, 2, 0, 1]))
