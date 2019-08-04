# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     auto_resize_list
   Description :
   Author :        patrick
   date：          2019/8/4
-------------------------------------------------
   Change Activity:
                   2019/8/4:
-------------------------------------------------
"""
__author__ = 'patrick'


class AutoResizeList:
    def __init__(self, initial_data=None, fill=None):
        if initial_data is None:
            self._data = []
        else:
            self._data = initial_data
        self.fill = fill

    def __setitem__(self, index, value):
        if index >= len(self._data):
            self._data += [self.fill] * (index - len(self._data) + 1)
        self._data[index] = value

    def __getitem__(self, item):
        return self._data[item]

    def __delitem__(self, key):
        del self._data[key]

    def __repr__(self):
        return str(self._data)

    def __eq__(self, other):
        return self._data == other

    def __len__(self):
        return len(self._data)

    def size(self):
        return len(self._data)

    def append(self, item):
        self._data.append(item)

    def preappend(self, item):
        self._data = item + self._data


# if __name__ == '__main__':
#     arl = AutoResizeList(initial_data=list(range(30)))
#     print(arl.size())

