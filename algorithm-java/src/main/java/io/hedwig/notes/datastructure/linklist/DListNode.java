package io.hedwig.notes.datastructure.linklist;

/**
 * double linked nodes
 *
 * previous  <---current---> next
 */
public class DListNode {
  private int val;
  private DListNode prev,next;

  public DListNode(int val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
  public DListNode reverse(DListNode head) {
    DListNode curr = null;
    while (head != null) {
      curr = head;
      head = curr.next;
      curr.next = curr.prev;
      curr.prev = head;
    }
    return curr;
  }
  public int getVal() {
    return val;
  }

  public void setVal(int val) {
    this.val = val;
  }

  public DListNode getPrev() {
    return prev;
  }

  public void setPrev(DListNode prev) {
    this.prev = prev;
  }

  public DListNode getNext() {
    return next;
  }

  public void setNext(DListNode next) {
    this.next = next;
  }
}
