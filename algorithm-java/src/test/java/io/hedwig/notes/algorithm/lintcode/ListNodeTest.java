package io.hedwig.notes.algorithm.lintcode;

import static org.junit.Assert.*;

import org.junit.Test;

/**
 * @author: patrick
 */
public class ListNodeTest {

  @Test
  public void testListNode(){
    ListNode root = new ListNode(0);
    ListNode current = null;
    root.next=current;
    System.out.println(root);
  }
}