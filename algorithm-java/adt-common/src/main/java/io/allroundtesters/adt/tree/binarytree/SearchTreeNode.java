package io.allroundtesters.adt.tree.binarytree;

import java.util.List;

import io.allroundtesters.adt.tree.TreeEntry;

interface SearchTreeNode<K extends Comparable<K>, V> {

  TreeEntry<K, V> getEntry();

  SearchTreeNode<K, V> getParent();

  boolean hasParent();

  boolean hasChildren();

  List<SearchTreeNode<K, V>> getChildren();

}