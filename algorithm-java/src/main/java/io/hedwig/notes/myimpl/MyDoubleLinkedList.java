package io.hedwig.notes.myimpl;

/**
 * @@author: patrick
 * //not able to access a random position
 * // traverse to get what you want
 * // insert/delete
 */
public class MyDoubleLinkedList {
  class DoubleListNode{
    int val;
    DoubleListNode next,pre;
    //pre is null, that's root
    // next is null. that's tail
    DoubleListNode(int x){
      this.val=x;
    }
  }


}
