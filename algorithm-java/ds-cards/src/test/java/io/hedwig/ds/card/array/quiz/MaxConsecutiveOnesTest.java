package io.hedwig.ds.card.array.quiz;

import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Test;

/**
 * @@author: patrick
 */
public class MaxConsecutiveOnesTest {

  @Test
  public void findMaxConsecutiveOnes() {

    int result = new MaxConsecutiveOnes().findMaxConsecutiveOnes(
        new int[]{0,1,1,1,1,1,0}
    );
    Assert.assertEquals(5,result);
  }

  @Test
  public void findMaxConsecutiveOnes_startwith0() {

    int result = new MaxConsecutiveOnes().findMaxConsecutiveOnes(
        new int[]{0}
    );
    Assert.assertEquals(0,result);
  }
  @Test
  public void findMaxConsecutiveOnes_startwith1() {

    int result = new MaxConsecutiveOnes().findMaxConsecutiveOnes(
        new int[]{1}
    );
    Assert.assertEquals(1,result);
  }

  @Test
  public void findMaxConsecutiveOnes_01() {

    int result = new MaxConsecutiveOnes().findMaxConsecutiveOnes(
        new int[]{0,1}
    );
    Assert.assertEquals(1,result);
  }
}