package io.hedwig.notes.algorithm.leetcodes.treetag;

import io.hedwig.notes.datastructure.tree.TreeNode;

/**
 * @@author: patrick
 */
public class StringBinaryTree_606 {

  public static String tree2str(TreeNode t) {
    if(t.left==null&&t.right==null) return String.valueOf(t.val);

    return String.valueOf(t.val);

  }

  public static void main(String[] args) {
    System.out.println(tree2str(new TreeNode(0)));
  }
}
