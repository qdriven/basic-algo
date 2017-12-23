package io.hedwig.notes.algorithm.sortings;

import org.junit.Before;

import java.util.Random;

/**
 * @author: patrick
 */
public class BaseSortTest {
  int[] aList = new int[10];
  private Random random = new Random();
  @Before
  public void setup(){
    for (int i = 0; i <10; i++) {
      aList[i]= random.nextInt(100);
    }
  }
}
