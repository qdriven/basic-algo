package io.allroundtesters.adt.array;

import lombok.Data;

/**
 * @author: patrick on 2019-02-07
 * @Description:
 */
@Data
public class LinkedNode<T> {
  private LinkedNode next;
  private T data;

  public LinkedNode(LinkedNode next, T data) {
    this.next = next;
    this.data = data;
  }
}
