package io.hedwig.notes.algorithm.leetcodes.linkedlist;

/**
 * @@author: patrick
 */
public class ReverseLinkedList {

  public ListNode reverseLinkedList(ListNode node){
    ListNode cur = node,prev=null,next=null;

    while(cur!=null){
      //next as cur, cur node -> prev
      //pre=cur
      next = cur.next;
      cur.next=prev;
      prev=cur;
      cur=next;
    }

    return prev;
  }
}
