package io.hedwig.notes.algorithm.strings;

import org.junit.After;
import org.junit.Assert;
import org.junit.Test;

/**
 * 1. author: patrick
 */
public class LeftRotateStringTest {

  @Test
  public void rotateByMVF2L() throws Exception {
    LeftRotateString.rotateByMVF2L(chars,chars.length,5);
    System.out.println(chars);
    Assert.assertArrayEquals(chars,"fabcde".toCharArray());
  }

  char[] chars = "abcdef".toCharArray();

  @Test
  public void rotateOneByOne() throws Exception {
    LeftRotateString.mvFistToLast(chars, chars.length);
    System.out.println(chars);
    Assert.assertArrayEquals(chars,"bcdefa".toCharArray());
  }

  @After
  public void resetChars(){
    this.chars="abcdef".toCharArray();
  }

}