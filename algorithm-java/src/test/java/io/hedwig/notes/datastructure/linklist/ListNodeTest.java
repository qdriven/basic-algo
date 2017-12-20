package io.hedwig.notes.datastructure.linklist;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

/**
 * @author: patrick
 */
public class ListNodeTest {
  ListNode root = new ListNode(0);

  @Before
  public void setupListNode(){
    ListNode current = null;
    for (int i = 0; i < 5; i++) {
      if(root.getNext()==null){
        root.setNext(new ListNode(i+1));
        current=root.getNext();
      }else{
        current.setNext(new ListNode(i+1));
        current=current.getNext();
      }
    }
  }

  @Test
  public void test_toString(){
    System.out.println(root.toString());
    assertEquals(root.toString(),"0-1-2-3-4-5");
  }

  @Test
  public void reverse() throws Exception {
  }

}