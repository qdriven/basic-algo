package io.hedwig.notes.algorithm.sortings;

import static org.junit.Assert.*;

import org.junit.Test;

/**
 * @author: patrick
 */
public class InsertSorterTest extends BaseSortTest{

  @Test
  public void sort() throws Exception {
    InsertSorter sorter = new InsertSorter();
    sorter.sort(this.aList);
    sorter.printSoredList(aList);
  }

}