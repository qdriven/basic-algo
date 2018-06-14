package io.hedwig.notes.algorithm.leetcodes.easy;

/**
 * @@author: patrick
 */
public class AddBinary_67 {
  public String addBinary(String a, String b) {
    int a1= Integer.parseInt(a,2);
    int a2 = Integer.parseInt(b,2);
    int result = a1+a2;
    return Integer.toString(result,2);
  }
}
