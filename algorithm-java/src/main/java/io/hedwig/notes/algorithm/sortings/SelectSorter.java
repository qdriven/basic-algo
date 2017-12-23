package io.hedwig.notes.algorithm.sortings;

/**
 * @author: patrick
 * find the least in the remain elements
 * and swap with current position
 * O(n^2),数据移动少，只记录min_index,不swap,找到最小后
 * 才swap
 */
public class SelectSorter implements Sorter {

  @Override
  public void sort(int[] aList) {
    for (int i = 0; i <aList.length; i++) {
      int minIndex = i;
      for (int j = i+1; j < aList.length; j++) {
        if(aList[j]<aList[minIndex]){
          minIndex=j;
        }
      }
      swap(aList,minIndex,i);
    }
  }
}
