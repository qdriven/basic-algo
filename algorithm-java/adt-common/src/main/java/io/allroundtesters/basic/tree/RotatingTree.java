package io.allroundtesters.basic.tree;

public interface RotatingTree<E> extends BinaryTree<E> {

    void rotateLeft();

    void rotateRight();

}