package io.hedwig.notes.algorithm.princeton.algo4.fundation;

/**
 * 1. author: patrick 2. address: github.com/ideafortester
 */
public class BinarySearch {

  /**
   * lowIndex ------ midIndex ----- hiIndex
   * ^low                           ^high
   * ^lowIndex       ^hiIndex
   *  1. compare with mid value,if less then mid value,
   *  move hiIndex to midIndex-1
   *  2. greater than mid value, move lowIndex to midIndex+1
   *  3. if equal to mid value, return it
   */
  public static int indexOf(int[] sortedSource, int key) {
    int loIndex = 0;
    int hiIndex = sortedSource.length - 1;
    while (loIndex <= hiIndex) {
      int midIndex = loIndex + (hiIndex - loIndex) / 2;
      if (key < sortedSource[midIndex]) {
        hiIndex = midIndex - 1;
      } else if (key > sortedSource[midIndex]) {
        loIndex = midIndex + 1;
      } else {
        return midIndex; //this is the stop condition
      }
    }
    return -1;
  }
}
