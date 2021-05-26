package io.hedwig.notes.datastructure.queue;


import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.PriorityQueue;

/**
 * @author: patrick
 */
public class JDKLinkedListTest {
  LinkedList lists = new LinkedList();
  PriorityQueue pQueue = new PriorityQueue();

  @Before
  public void setup(){
    for (int i = 0; i < 100; i++) {
      lists.add(i);
    }
  }
  @Test
  public void test_LinkedList_add(){
    lists.add(101);
    Assert.assertEquals(lists.size(),101);
    lists.remove(10);
    Assert.assertEquals(lists.size(),100);
    System.out.println(lists.peek());
    System.out.println(lists.element());
    Iterator it = lists.descendingIterator();
    while(it.hasNext()){
      System.out.println(it.next());
    }
  //return true
    System.out.println(lists.offer(19));
  }

  @Test
  public void test_priority_queue(){
    for (int i = 0; i < 100; i++) {
      this.pQueue.add(i);
    }
  }
}