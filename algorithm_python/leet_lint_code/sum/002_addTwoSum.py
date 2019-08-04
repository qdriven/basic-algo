'''
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
'''


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        result = ListNode(0);
        cur = result
        carry = 0
        while l1 or l2:
            x = l1.val if l1 is not None and l1.val is not None else 0
            y = l2.val if l2 is not None and l2.val is not None else 0
            sum = x + y + carry
            if sum >= 10:
                carry = 1
            else:
                carry =0
            cur.next = ListNode(sum % 10)
            cur = cur.next
            if l1 is not None:
                l1 = l1.next
            if l2 is not None:
                l2 = l2.next
        if carry == 1:
            cur.next = ListNode(carry)

        return result.next

# if __name__ == '__main__':
#     result = Solution().addTwoNumbers([2,4,3],[5,6,4])
#     print(result)