package io.hedwig.notes.datastructure.linklist;

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

  public ListNode(int val) {
    this.val = val;
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

  @Override
  public String toString() {

    ListNode current = this;
    StringBuffer sb = new StringBuffer();
    while(current.getNext()!=null){
      sb.append(current.val);
      sb.append("-");
      current=current.getNext();
    }

    sb.append(current.val);
    return sb.toString();
  }
}
