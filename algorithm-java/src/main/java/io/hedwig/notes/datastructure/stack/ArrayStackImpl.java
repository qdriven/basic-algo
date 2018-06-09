package io.hedwig.notes.datastructure.stack;

/**
 * @@author: patrick
 */
public class ArrayStackImpl {
//capacity - deal with array
  //add to n,pop n-1
  private String[] s;
  private int n = 0;
  public ArrayStackImpl(){
    this.s = new String[100];
  }

  public boolean isEmpty(){
    return n==0;
  }

  public String pop(){
    String item =s[--n];
    s[n] =null; //for GC
    return item;
  }

  public void push(String item){
    s[n++]=item;
  }

  //resizing
  //loitering
  //overflow and underflow
}
