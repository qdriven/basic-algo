package io.allroundtesters.adt.array;

/**
 * @author: patrick on 2019-02-07
 * @Description:
 *
 * ToDo: Test For
 * 1. ArrayList
 * 2. LinkedList
 */
public class MyLinkedList<T> {

  private LinkedNode<T> head;
//  private LinkedNode<T> tail;

  public MyLinkedList() {
    this.head =null;
  }

  public void addFirst(T data){
    this.head= new LinkedNode<>(head, data);

  }

  public void addLast(T data){
    LinkedNode<T> node = new LinkedNode<>(null,data);
    if(head==null){
      this.head= node;
    }else{
      LinkedNode<T> temp = this.head;
      while(temp.getNext()!=null){ //go to last
        temp=temp.getNext();
      }
      temp.setNext(node);
    }

  }
  public T getFirst(){
    return this.head.getData();
  }

  public T getLast(){
    if(this.head==null) return null;
    LinkedNode<T> temp = this.head;
    while(temp.getNext()!=null){
      temp = temp.getNext();
    }
    return temp.getData();
  }

  public MyLinkedList<T> removeFirst(){
    if(this.head==null) return null;
    LinkedNode<T> node = this.head;
    this.head = node.getNext();
    return this;
  }

  public MyLinkedList<T> removeLast(){
    if(this.head!=null){
      LinkedNode<T> temp = this.head;
      LinkedNode<T> prev = temp;
      while(temp.getNext()!=null){
        prev=temp;
        temp=temp.getNext();
      }
      prev.setNext(null);
    }
    return this;
  }

  public static <T>  MyLinkedList<T> buildLinkedList(T[] elements){
    MyLinkedList<T> ll=new MyLinkedList<>();
    for (T element : elements) {
      ll.addLast(element);
    }
    return ll;
  }
}
