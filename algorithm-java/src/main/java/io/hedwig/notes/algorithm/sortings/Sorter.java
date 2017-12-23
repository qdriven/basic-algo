package io.hedwig.notes.algorithm.sortings;

/**
 * 1. author: patrick
 */
public interface Sorter {

  public void sort(int[] aList);

  default void swap(int[] aList, int first, int second) {
    int tmp = aList[second];
    aList[second] = aList[first];
    aList[first] = tmp;
  }

  default void printSoredList(int[] aList){
    for (int i : aList) {
      System.out.println(i);
    }
  }
}
