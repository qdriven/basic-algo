package io.hedwig.notes.algorithm.leetcodes.linkedlist;

/**
 * @@author: patrick
 */
public class PartitionLinkedList {

  public ListNode partition(ListNode head,
                           int x ){
    if(head==null) return null;

    ListNode small = new ListNode(0);
    ListNode large = new ListNode(0);
    ListNode result = small;
    ListNode connection = large;

    while(head!=null){
      if(head.val<x){ //add to small
        small.next = head;
        small = small.next;
      }else{
        large.next=head;
        large=large.next;
      }
      head=head.next;
    }
    large.next=null;
    small.next=connection.next;
    return result.next;
  }
}
