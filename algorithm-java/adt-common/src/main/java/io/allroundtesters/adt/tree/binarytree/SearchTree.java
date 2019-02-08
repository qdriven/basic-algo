package io.allroundtesters.adt.tree.binarytree;

public interface SearchTree<K extends Comparable<K>, V> {

    public SearchTreeNode<K, V> getRoot();

}