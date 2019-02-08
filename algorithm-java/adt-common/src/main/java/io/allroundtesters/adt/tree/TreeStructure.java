package io.allroundtesters.adt.tree;

public interface TreeStructure<K extends Comparable<K>, V> {

    public void add(TreeEntry<K, V> entry);

    public void remove(K key);

    public TreeEntry<K, V> get(K key);

}