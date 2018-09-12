package io.hedwig.notes.myimpl;

import io.hedwig.notes.datastructure.linklist.ListNode;

/**
 * @@author: patrick
 * Given a linked list, determine if it has a cycle in it.
 * There is no cycle/a cycle, faster pointer meet the slow pointer
 * Fast: 2 steps
 * Slow: 1 step
 */
public class MyTwoPointerLInkedList {

    public boolean hasCycle(ListNode head) {
      if (head==null) return false;
      ListNode fast = head;
      ListNode slow = head;

      while(fast!=null&&slow!=null&&fast.getNext()!=null){
        if(slow.getNext()==null) return false;
        if(fast.getNext()==null||fast.getNext().getNext()==null) return false;
        if(slow.getNext()==fast.getNext().getNext()) return true;
        slow=slow.getNext();
        fast=fast.getNext().getNext();
      }
      return false;
    }


  public ListNode detectCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    ListNode meet = null;
    while(fast != null) {
      slow = slow.next;
      fast = fast.next;
      if (fast == null) {
        return null;
      }
      fast = fast.next;
      if (fast == slow) {
        meet = slow;
        break;
      }
    }

    //after find where meet to find how the linked point
    if (meet == null) {
      return null;
    }
    //from head to find the meet point
    while(meet != null && head != null) {
      if (meet == head) {
        return meet;
      }
      meet = meet.next;
      head = head.next;
    }
    return null;
  }

  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    int sizeA = 1;
    int sizeB = 1;
    ListNode headACopy = headA;
    ListNode headBCopy = headB;
    if(headA == null || headB == null) return null;

    while (headACopy.next!=null){
      headACopy = headACopy.next;
      sizeA++;
    }
    while (headBCopy.next!=null){
      headBCopy = headBCopy.next;
      sizeB++;
    }

    if (headACopy != headBCopy) return null;

    while(sizeA > sizeB){
      headA = headA.next;
      sizeA--;
    }
    while(sizeA < sizeB){
      headB = headB.next;
      sizeB--;
    }

    while(headA!=null && headB!=null){
      if (headA == headB) return headA;
      headA = headA.next;
      headB = headB.next;
    }
    return null;

  }
  public ListNode removeNthFromEnd(ListNode head, int n) {
    //find the tail element
    ListNode tmp=head,pre=head;
    while(n--!=0){
      tmp=tmp.next;
    }

    if(tmp==null) return head.next;//list contains n ele

    while(tmp.next!=null){
      pre=pre.next;
      tmp=tmp.next;
    }
    pre.next=pre.next.next;

    return head;
  }

  public ListNode reverseList(ListNode head) {
    ListNode pre = null;
    ListNode next ;
    ListNode cur =head;
    while(cur!=null){
      next = cur.next; //backup next value
      cur.next = pre; //change link direction
      pre=cur; //move point
      cur=next; //move point
    }
    return pre;
  }
}
