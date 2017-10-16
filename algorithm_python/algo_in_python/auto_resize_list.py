# -*- coding:utf-8 -*-

"""
## auto_resize_list:

当一个list的下标越界，自动扩展list的容量
list wrap that automatically extend the list
when indices outside its current range are accessed

"""


class AutoResizeList:
    def __init__(self, init_data=[], fill=None):
        """

        :param init_data:
        :param fill: when auto resize, the filled value for the extended elements
        """
        self._data = init_data
        self._fill = fill

    def __setitem__(self, index, value):
        # auto resize
        if index >= len(self._data):
            self._data += [self._fill] * (index - len(self._data) + 1)
            self._data[index] = value

    def __getitem__(self, index):
        try:
            return self._data[index]
        except IndexError as e:
            print(e)
            return None

    def __delitem__(self, index):
        del self._data[index]

    def __repr__(self):
        return str(self._data)

    def __eq__(self, other):
        return self._data == other

    def __len__(self):
        return len(self._data)

    def prepend(self, item):
        self._data = [item] + self._data

    def append(self, item):
        self._data.append(item)
