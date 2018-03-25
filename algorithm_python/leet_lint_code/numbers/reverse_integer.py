# -*- coding:utf-8 -*-

class Solution(object):
    def reverse_integer(self, num):
        positive = True
        if num < 0:
            positive = False
            num = abs(num)
        result = 0
        while num != 0:
            result = result * 10 + num % 10
            num //= 10

        if not positive:
            result = -result

        return 0 if result < -2147483648 or result > 2147483647 else result

    def reverse_string(self, num):
        if not num: return 0
        positive = True if num >= 0 else False
        if positive:
            num = str(num)
        else:
            num = str(num)[1:]
        length = len(num)
        mid = int(length // 2)
        str_list = ['' for i in range(length)]
        for i in range(mid):
            str_list[i] = num[length - 1 - i]
            str_list[length - 1 - i] = num[i]
        if mid * 2 < length:
            str_list[mid + 1] = num[mid]

        int_str = int("".join(str_list))
        result = int_str if positive else -int_str
        return 0 if result < -2147483648 or result > 2147483647 else result


if __name__ == '__main__':
    s = Solution()
    result = s.reverse_integer(-2147483648)
    print(result)
    print(-8463847412 < -2147483648)
    print(s.reverse_string(2147483648))
    print(s.reverse_string(2147))
    print(s.reverse_string(-2147))
    print(s.reverse_string(0))
    print(s.reverse_string(990))
