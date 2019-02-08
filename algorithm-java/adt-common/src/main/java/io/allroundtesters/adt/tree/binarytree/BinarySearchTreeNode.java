package io.allroundtesters.adt.tree.binarytree;

import java.util.ArrayList;
import java.util.List;

import io.allroundtesters.adt.tree.TreeEntry;


class BinarySearchTreeNode<K extends Comparable<K>, V> implements SearchTreeNode<K, V> {

    private final TreeEntry<K, V> entry;

    protected BinarySearchTreeNode<K, V> parent;

    protected BinarySearchTreeNode<K, V> leftChild;

    protected BinarySearchTreeNode<K, V> rightChild;

    /**
     * @param entry
     */
    BinarySearchTreeNode(TreeEntry<K, V> entry) {
        super();
        this.entry = entry;
    }

    /**
     * @return
     */
    @Override
    public TreeEntry<K, V> getEntry() {
        return entry;
    }

    /**
     * @return
     */
    @Override
    public BinarySearchTreeNode<K, V> getParent() {
        return parent;
    }

    /**
     * @return
     */
    @Override
    public boolean hasParent() {
        return getParent() != null;
    }

    /**
     * @return
     */
    @Override
    public boolean hasChildren() {
        return leftChild != null || rightChild != null;
    }

    /**
     * @return
     */
    @Override
    public List<SearchTreeNode<K, V>> getChildren() {
        List<SearchTreeNode<K, V>> list = new ArrayList<>(2);
        if (leftChild != null) {
            list.add(leftChild);
        }
        if (rightChild != null) {
            list.add(rightChild);
        }
        return list;
    }

    public BinarySearchTreeNode<K, V> getLeftChild() {
        return leftChild;
    }

    public void setLeftChild(BinarySearchTreeNode<K, V> leftChild) {
        this.leftChild = leftChild;
    }

    public BinarySearchTreeNode<K, V> getRightChild() {
        return rightChild;
    }

    public void setRightChild(BinarySearchTreeNode<K, V> rightChild) {
        this.rightChild = rightChild;
    }

    public void setParent(BinarySearchTreeNode<K, V> parent) {
        this.parent = parent;
    }

    @Override
    public String toString() {
        return "BinarySearchTreeNode [entry=" + entry + ", parent="
                + (parent == null ? "null" : parent.getEntry()) + ", leftChild="
                + (leftChild == null ? "null" : leftChild.getEntry()) + ", rightChild="
                + (rightChild == null ? "null" : rightChild.getEntry()) + "]";
    }

    public String toStringAll() {
        return "BinarySearchTreeNode [entry=" + entry + ", parent="
                + (parent == null ? "null" : parent.getEntry()) + ", leftChild=" + leftChild
                + ", rightChild=" + rightChild + "]";
    }

}
