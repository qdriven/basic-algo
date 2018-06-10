package io.hedwig.notes.algorithm.leetcodes.linkedlist;

/**
 * @@author: patrick
 *
 *
 */
public class DeleteNodeInALinkedList {
   public void deleteNode(ListNode node){

     if(node==null || node.next==null) return;
     node.val = node.next.val;
     node.next=node.next.next;
   }
}
