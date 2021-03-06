package io.allroundtesters.adt.tree.binarytree;

import io.allroundtesters.adt.tree.TreeEntry;

/**
 * @author cairne huangyihua@diandian.com
 * @date 2012-6-22
 *       红黑树是每个节点都带有颜色属性的二叉查找树，颜色为红色或黑色。在二叉查找树强制一般要求以外，
 *       对于任何有效的红黑树我们增加了如下的额外要求:
 *       性质1. 节点是红色或黑色。
 *       性质2. 根是黑色。
 *       性质3. 所有叶子都是黑色（叶子是NIL节点）。
 *       性质4. 每个红色节点的两个子节点都是黑色。(从每个叶子到根的所有路径上不能有两个连续的红色节点)
 *       性质5. 从任一节点到其每个叶子的所有简单路径都包含相同数目的黑色节点。
 *       参考 {@link http
 *       ://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91}
 */
public class RedBlackTree<K extends Comparable<K>, V> extends BinarySearchTree<K, V> {

    /**
     * @param entry
     */
    @Override
    public void add(TreeEntry<K, V> entry) {
        RedBlackTreeNode<K, V> newNode = new RedBlackTreeNode<>(entry, RedBlackTreeNode.Color.Red);
        boolean inserted = true;
        if (root == null) {
            root = newNode;
        } else {
            inserted = insert(root, newNode);
        }
        if (inserted) {
            adjustTree(newNode);
        }
    }

    /**
     * 调整树结构，分5种情况
     * 
     * @param node
     */
    private void adjustTree(RedBlackTreeNode<K, V> node) {
        RedBlackTreeNode<K, V> parent = node.getParent();
        //case 1: 根节点，染成黑色以满足性质1
        if (!node.hasParent()) {
            node.setColor(RedBlackTreeNode.Color.Black);
            return;
        }
        //case 2:父节点是黑色，满足所有性质
        if (parent.getColor() == RedBlackTreeNode.Color.Black) {
            return;
        }

        //case 3:父亲和uncle都是红色
        if (parent.getColor() == RedBlackTreeNode.Color.Red && node.getUncle().getColor() == RedBlackTreeNode.Color.Red) {
            parent.setColor(RedBlackTreeNode.Color.Black);
            node.getUncle().setColor(RedBlackTreeNode.Color.Black);
            node.getGrandParent().setColor(RedBlackTreeNode.Color.Red);
            adjustTree(node.getGrandParent());
            return;
        }

        //case 4:旋转一次
        if (parent.getRightChild() == node && parent == node.getGrandParent().getLeftChild()) {
            rotateLeft(parent);
            adjustTree(parent);
            return;
        } else if (parent.getLeftChild() == node && parent == node.getGrandParent().getRightChild()) {
            rotateRight(parent);
            adjustTree(parent);
            return;
        }

        //case 5:旋转祖父结点
        parent.setColor(RedBlackTreeNode.Color.Black);
        node.getGrandParent().setColor(RedBlackTreeNode.Color.Red);
        if (parent.getRightChild() == node && parent == node.getGrandParent().getRightChild()) {
            rotateLeft(node.getGrandParent());
            return;
        } else if (parent.getLeftChild() == node && parent == node.getGrandParent().getLeftChild()) {
            rotateRight(node.getGrandParent());
            return;
        }
    }

    @Override
    public void remove(K key) {
    };

    /**
     * @return
     */
    @Override
    public RedBlackTreeNode<K, V> getRoot() {
        return (RedBlackTreeNode<K, V>) root;
    }

}
