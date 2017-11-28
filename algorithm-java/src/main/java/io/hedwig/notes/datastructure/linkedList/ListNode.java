package io.hedwig.notes.datastructure.linkedList;

/**
 * List Node
 */
public class ListNode {

  private int val;
  private ListNode next;

  public ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }

  public int getVal() {
    return val;
  }

  public void setVal(int val) {
    this.val = val;
  }

  public ListNode getNext() {
    return next;
  }

  public void setNext(ListNode next) {
    this.next = next;
  }

  /**
   * reverse list nodes
   * @param head
   * @return
   */
  public ListNode reverse(ListNode head){
    ListNode prev = null;
    while(head!=null){
      ListNode next = head.next;
      head.next = prev;
      prev=head;
      head = next;
    }
    return prev;
  }
}
