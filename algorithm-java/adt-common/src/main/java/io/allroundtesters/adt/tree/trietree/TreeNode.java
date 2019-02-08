package io.allroundtesters.adt.tree.trietree;

import java.util.List;

interface TreeNode<T> {

    T getValue();

    List<? extends TreeNode<T>> getChildren();

    TreeNode<T> getParent();

}
