package io.hedwig.notes.myimpl;

/**
 * @@author: patrick
 */

class MyLinkedList {
  public MyNode head;

  class MyNode{
    public int val;
    public MyNode next;
  }

  /**
   * Initialize your data structure here.
   */
  public MyLinkedList() {
    this.head= new MyNode();
    head.next=null;
  }

  /**
   * Get the value of the index-th node in the linked list.
   * If the index is invalid, return -1.
   */
  public int get(int index) {
    MyNode tmp = this.head;
    while(tmp.next!=null&&index>=0){
      tmp=tmp.next;
      index--;
    }

    if(index>0) return -1;
    return tmp.val;
  }

  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   */
  public void addAtHead(int val) {
      MyNode node = new MyNode();
      node.val=val;
      node.next=head;
  }

  /**
   * Append a node of value val to the last element of the linked list.
   */
  public void addAtTail(int val) {
    MyNode tmp = this.head;
    while(tmp.next!=null){
      tmp=tmp.next;
    }
    MyNode node = new MyNode();
    node.val=val;
    node.next=null;
    tmp.next=node;
  }

  /**
   * Add a node of value val before the index-th
   * node in the linked list.
   * If index equals to the length of linked list,
   * the node will be appended to the end of linked list.
   * If index is greater than the length,
   * the node will not be inserted.
   */
  public void addAtIndex(int index, int val) {
    if(this.head.next!=null) {
      MyNode pre = this.head;
      MyNode cur = this.head.next;
      while (cur.next != null && index >= 0) {
        pre = cur;
        cur = cur.next;
        index--;
      }

      if (index < 0) {
        MyNode node = new MyNode();
        node.val = val;
        node.next = cur;
        pre.next=node;
      }
    }else{
      if(index==1){
        MyNode node = new MyNode();
        node.val=val;
        node.next=null;
        this.head.next=node;
      }
    }

  }

  /**
   * Delete the index-th node in the linked list, if the index is valid.
   */
  public void deleteAtIndex(int index) {
    if(this.head.next!=null){
      MyNode pre = this.head;
      MyNode cur = this.head.next;
      while(cur.next!=null&&index>0){
        pre = cur;
        cur=cur.next;
        index--;
      }

      assert cur.next != null;
      pre.next=cur.next.next;
    }
  }
}

//todo : add unit testing
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
