# -*- coding: utf-8 -*-

"""
-------------------------------------------------
   File Name：     str_methods
   Description :
   Author :        patrick
   date：          2019/3/5
-------------------------------------------------
   Change Activity:
                   2019/3/5:
-------------------------------------------------
"""
import collections

__author__ = 'patrick'

print('.'.join(['but', 'that']))
print('.'.join(reversed(['but', 'that'])))
print("name".rjust(50, '-'))

## formmatting

print("{0} {1}".format("place1", "place2"))
print("{p1} {p2}".format(p1="place1", p2="place2"))

template = """
{p1} {p2}
"""

# print(template.format(**locals()))
print(template.format(p1="0", p2="1"))

# split/splitlines

## find,index and re
## count()

## tuples () immutable

named_tuple = collections.namedtuple("Monster", "name age power")
named_tuple.name = "name"
named_tuple.age = "age"
print(named_tuple.name)
print(named_tuple.age)

# List

