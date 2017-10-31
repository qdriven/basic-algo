package io.hedwig.notes.algorithm.princeton.algo4.fundation;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.Random;

/**
 * 1. author: patrick 2. address: github.com/ideafortester
 */
public class BinarySearchTest {

  private int[] source = new int[100];

  @Before
  public void setUp() {
    for (int i = 0; i < 100; i++) {
      source[i] = i + new Random().nextInt(1000);
    }

    Arrays.sort(source);
  }

  @Test
  public void indexOf() throws Exception {

    System.out.println(
        BinarySearch.indexOf(this.source, this.source[30]));
  }

}