package io.hedwig.notes.algorithm.sortings;

import static org.junit.Assert.*;

import org.junit.Test;

/**
 * @author: patrick
 */
public class BubbleSorterTest extends BaseSortTest {

  @Test
  public void sort() throws Exception {
    BubbleSorter sorter = new BubbleSorter();
    sorter.sort(aList);
    System.out.println(aList);
    for (int s : aList) {
      System.out.println(s);
    }
  }

}