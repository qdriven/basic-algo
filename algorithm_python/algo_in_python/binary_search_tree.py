# -*- coding:utf-8 -*-

"""
# Binary Search Tree

通过内嵌的列表实现

"""


def node_value(node, new_value=None):
    node[0] = new_value if new_value is not None else node[0]
    return node[0]


def left_child(node, new_node=None):
    node[1] = new_node if new_node is not None else node[1]
    return node[1]


def right_child(node, new_node=None):
    node[2] = new_node if new_node is not None else node[2]
    return node[2]


def add(tree, value):
    if tree == []:
        tree = [value, [], []]
    elif node_value(tree) == None:
        node_value(tree, value)
    elif value < node_value(tree):
        """go left"""
        left_child(tree, add(left_child(tree), value))
    elif value > node_value(tree):
        right_child(tree, add(right_child(tree), value))

    return tree


def _find_node(tree, value, parent=None, is_right_child=False):
    if tree == []:
        return (None, parent, is_right_child)
    if node_value(tree) == value:
        return (tree, parent)
    elif value < node_value(tree):
        return _find_node(left_child(tree), value, parent=tree, is_right_child=False)
    elif value > node_value(tree):
        return _find_node(right_child(tree), value, parent=tree, is_right_child=True)


def contains(tree, value):
    return _find_node(tree, value) != None


def _find_min_node(tree, parent=None, is_right_child=False):
    if left_child(tree) == []:
        return (tree, parent, is_right_child)
    else:
        return _find_min_node(left_child(tree), tree, False)


def _remove_node(node_to_remove, parent, is_right_child_of_parent):
    if not node_to_remove:
        return

    def set_parent_reference(new_reference):
        if parent:
            if is_right_child_of_parent:
                right_child(parent, new_reference)
            else:
                left_child(parent, new_reference)

    if left_child(node_to_remove) != [] and right_child() != []:
        (right_child_min_node, rchild_min_node_parent, is_right_child) = _find_min_node(right_child(node_to_remove),
                                                                                        node_to_remove)
        node_value(node_to_remove, node_value(right_child_min_node))
        _remove_node(right_child_min_node, rchild_min_node_parent, is_right_child)
    elif left_child(node_to_remove) != []:
        set_parent_reference(left_child(node_to_remove))
    elif right_child(node_to_remove) != []:
        set_parent_reference(right_child(node_to_remove))
    else:
        set_parent_reference([])
