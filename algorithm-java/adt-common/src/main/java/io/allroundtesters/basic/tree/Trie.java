package io.allroundtesters.basic.tree;


import java.util.List;

public interface Trie<E extends Comparable<E>> extends Tree<E> {

    List<E> getLinks();

    void addLink(E link, Trie<E> child);

    void removeLink(E link);

    Trie<E> find(List<E> query);

    List<List<E>> list();

    boolean isDataNode();

    Trie<E> getChild(E link);

}
