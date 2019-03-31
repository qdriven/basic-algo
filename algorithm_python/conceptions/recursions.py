def sum_list(nums):
    if len(nums) == 1:
        return nums[0]
    else:
        return nums[0] + sum_list(nums[1:])

# 递归求阶乘
def listFactorial(num):
    if num <= 1:
        return 1
    else:
        return num * listFactorial(num-1)

# 递归实现进制转换:
def toStr(n,base):
   convertString = "0123456789ABCDEF"
   if n < base:
      return convertString[n]
   else:
      return toStr(n//base, base) + convertString[n%base]

print(toStr(1453, 16))

# 递归实现Hanoi塔
def Hanoi(fromPole, withPole, toPole, diskNum):
    if diskNum <= 1:
        print("moving disk from %s to %s" % (fromPole, toPole))
    else:
        Hanoi(fromPole, toPole, withPole, diskNum-1)
        print("moving disk from %s to %s" % (fromPole, toPole))
        Hanoi(withPole, fromPole, toPole, diskNum-1)

Hanoi('A', 'B', 'C', 3)