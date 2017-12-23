package io.hedwig.notes.algorithm.bst;

/**
 * @author: patrick
 */
public class IntBinarySearchTree {

  private TreeNode root;


  public IntBinarySearchTree() {
    this.root = null;
  }

  /**
   * search for a key 1. if greater than current node value, go right 2. less than current value ,go
   * left 3. equal, return
   *
   * todo: fix issues for not found
   */
  public TreeNode search(int key) {

    if (root == null) {
      throw new RuntimeException("Empty Tree, nothing to find!");
    }
    if (root.getValue() == key) {
      return root;
    }
    TreeNode current = root;
    while (current != null && key != current.getValue()) {
      if (key > current.getValue()) {
        current = current.getRight();
      } else {
        current = current.getLeft();
      }
    }
    if (current == null) {
      throw new RuntimeException(String.format("%s is not found", key));
    }
    return current;
  }

  /**
   * insert key,
   * find the nearest key position, then insert to left or right node
   * @param key
   * @return
   */
  public TreeNode insert(int key) {
    TreeNode tobeAdded = new TreeNode(key);
    TreeNode current = root;
    if (current == null) {
      root = tobeAdded;
      return tobeAdded;
    }
    TreeNode parent =null;
    while(true){
      parent =root;
      if(key<current.getValue()){
        current=current.getLeft();
        if(current==null){
          parent.setLeft(tobeAdded);
          break;
        }
      }else{
        current=current.getRight();
        if(current==null){
          parent.setRight(tobeAdded);
          break;
        }
      }
    }

    return tobeAdded;
  }

}
