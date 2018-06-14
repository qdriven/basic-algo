package io.hedwig.notes.algorithm.leetcodes.linkedlist;

/**
 * @@author: patrick
 */
public class RemoveDuplicated_83 {
  public ListNode deleteDuplicates(ListNode head) {
    if(head==null)
      return null;
    ListNode temp=head;
    while(temp.next != null) {
      if(temp.val==temp.next.val) {
        temp.next=temp.next.next;
        continue;
      }
      temp=temp.next;
    }
    return head;
    }
}
