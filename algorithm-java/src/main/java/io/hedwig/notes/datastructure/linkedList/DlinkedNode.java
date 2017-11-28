package io.hedwig.notes.datastructure.linkedList;

/**
 * double linked nodes
 */
public class DlinkedNode {
  private int val;
  private DlinkedNode prev,next;

  public DlinkedNode(int val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
  public DlinkedNode reverse(DlinkedNode head) {
    DlinkedNode curr = null;
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

  public DlinkedNode getPrev() {
    return prev;
  }

  public void setPrev(DlinkedNode prev) {
    this.prev = prev;
  }

  public DlinkedNode getNext() {
    return next;
  }

  public void setNext(DlinkedNode next) {
    this.next = next;
  }
}
