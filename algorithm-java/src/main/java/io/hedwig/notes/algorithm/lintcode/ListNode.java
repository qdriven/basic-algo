package io.hedwig.notes.algorithm.lintcode;

import io.hedwig.notes.algorithm.annotations.AlgoTag;

/**
 * @author: patrick
 */
@AlgoTag(tags = {"ds"})
public class ListNode {

  public int val;
  public ListNode next;

  public ListNode(int x) {
    val = x;
  }

  public ListNode link(ListNode next){
    this.next=next;
    return this;
  }

  public boolean hasNext(){
    return next!=null;
  }

}
