class Node:
    def __init__(self, val):
        self.data = val
        self.next = None


class UnOrderedList:

    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None

    def add(self, item):
        temp = Node(item)
        temp.next = self.head
        self.head = temp

    def size(self):
        curr = self.head
        count = 0
        while curr is not None:
            count += 1
            curr = curr.next
        return count

    def search(self, item):
        curr = self.head
        found = False
        while curr is not None and not found:
            if curr.data == item:
                found = True
            else:
                curr = curr.next
        return found

    def remove(self, item):
        curr = self.head
        found = False
        previous = None
        while not found:
            if curr.data == item:
                found = True
            else:
                previous = curr
                curr = curr.next
        if previous is None:
            self.head = curr.next
        else:
            previous.next = curr.next


if __name__ == '__main__':
    ol = UnOrderedList()
    ol.add(3)
    ol.add(4)
    ol.add(5)
    ol.add(6)
    ol.add(7)
    ol.add(8)
    print(ol.search(7))
    ol.remove(8)
    print(ol.size())
    print(ol.remove(3))
    print(ol.size())
