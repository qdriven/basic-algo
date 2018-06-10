package io.hedwig.notes.algorithm.leetcodes.linkedlist;

/**
 * @@author: patrick
 * l1/l2: sorted
 * current cur in two list:
 * if l1.val < l2.val then l1.next -> l2 merge rest l1
 * else l2.next -> l1 merge l2 rest
 */
public class MergeTwoSortedList {

  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    if(l1==null) return l2;
    if(l2==null) return l1;

    if(l1.val<l2.val){
      l1.next = mergeTwoLists(l1.next,l2);
      return l1;
    }else{
      l2.next = mergeTwoLists(l1,l2.next);
      return l2;
    }
  }

  //iterator solution

  ListNode mergetTwo(ListNode l1,ListNode l2){
    ListNode ptr = new ListNode(-1);
    ListNode head = ptr;
    while(l1!=null&&l2!=null){
      if(l1.val<l2.val){
        ptr.next = l1;
        l1 = l1.next;
      }else{
        ptr.next = l2;
        l2 = l2.next;
      }
      ptr = ptr.next;
    }
    ptr.next = l1 == null?l2:l1;
    return head.next;
  }

}
