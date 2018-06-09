package io.hedwig.notes.datastructure.stack;

import static org.junit.Assert.*;

import org.junit.Test;

/**
 * @@author: patrick
 */
public class StackLinkedListImplTest {
  StackLinkedListImpl stackDemo = new StackLinkedListImpl();

  @Test
  public void isEmpty() {

    StackLinkedListImpl stackLinkedList = new StackLinkedListImpl();
    assertTrue(stackLinkedList.isEmpty());
  }

  @Test
  public void push() {
    stackDemo.push("test");
    assertEquals(stackDemo.pop(),"test");
  }

  @Test
  public void pop() {
  }

  @Test
  public void retrieveStack() {
    stackDemo.push("test1");
    stackDemo.push("test2");
    stackDemo.push("test3");
    stackDemo.push("test4");
    stackDemo.retrieveStack();
  }
}