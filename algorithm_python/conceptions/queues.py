class QQueue:

    def __init__(self):
        self.items = []

    def is_empty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)


def hotPotato(name_list, num):
    q = QQueue()
    for name in name_list:
        q.enqueue(name)

    while q.size() > 1:
        for i in range(num):
            q.enqueue(q.dequeue())
        q.dequeue()
    return q.dequeue()


class Deque:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return self.items == []

    def add_bottom(self, item):
        self.items.insert(0, item)

    def add_top(self, item):
        self.items.append(item)

    def remove_bottom(self):
        return self.items.pop(0)

    def peek(self):
        return self.items.pop()

    def size(self):
        return len(self.items)


def pal_checker(aString):
    charQueue = Deque()
    for char in aString:
        charQueue.add_top(char)

    is_pal = True
    while charQueue.size() > 1 and is_pal:
        first = charQueue.peek()
        last = charQueue.remove_bottom()
        if first != last:
            is_pal = False

    return is_pal


if __name__ == '__main__':
    q = QQueue()
    q.enqueue(4)
    q.enqueue('god')
    q.enqueue(True)
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())
    # print(q.dequeue()) # ## Error
    print(hotPotato(["Bill", "David", "Susan", "Jane", "Kent", "Brad"], 7))

    print(pal_checker("abcdef"))
    print(pal_checker("abccba"))
