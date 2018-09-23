package io.hedwig.ds.card.array.quiz;

import org.junit.Test;

/**
 * @@author: patrick
 */
public class LargestNumberAtLeastTwiceOfOtherTest {

  @Test
  public void dominantIndex() {
    int index = new LargestNumberAtLeastTwiceOfOther()
        .dominantIndex(new int[]{
        40,14,1,2,4,5,11
    });
    assert  index==0;
  }
}