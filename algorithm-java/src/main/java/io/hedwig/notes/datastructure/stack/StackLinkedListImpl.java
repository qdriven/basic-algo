package io.hedwig.notes.datastructure.stack;

/**
 * @@author: patrick
 */
public class StackLinkedListImpl {

  private SimpleNode first = null;

  public boolean isEmpty(){
    return first==null;
  }

  public void push(String item){
    SimpleNode oldFirst = this.first;
    first = new SimpleNode();
    first.item=item;
    first.next = oldFirst;
  }

  public String pop(){
    if(first==null) throw new RuntimeException("empty stack");
    String item = first.item;
    first = first.next;
    return item;

  }
  private class SimpleNode{
    String item;
    SimpleNode next;
  }

  public void retrieveStack(){
    while(first!=null){
      System.out.println(pop());
    }
  }


}
