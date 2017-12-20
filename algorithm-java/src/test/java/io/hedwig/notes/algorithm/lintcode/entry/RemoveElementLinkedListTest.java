package io.hedwig.notes.algorithm.lintcode.entry;

import org.junit.Assert;
import org.junit.Test;

import io.hedwig.notes.datastructure.linklist.ListNode;

/**
 * @author: patrick
 */
public class RemoveElementLinkedListTest {

  @Test
  public void removeElements_null() throws Exception {
    ListNode node = new ListNode(1);

    RemoveElementLinkedList re = new RemoveElementLinkedList();
    ListNode result = re.removeElements(node,0);
    Assert.assertEquals(null,result);
  }

  @Test
  public void removeElements_1() throws Exception {
    ListNode node = new ListNode(1);

    RemoveElementLinkedList re = new RemoveElementLinkedList();
    ListNode result = re.removeElements(node,1);
    Assert.assertEquals(null,result);
  }

}