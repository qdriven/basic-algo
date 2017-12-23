package io.hedwig.notes.algorithm.sortings;

import io.hedwig.notes.algorithm.annotations.AlgoTag;

/**
 * 1. author: patrick
 * 34.	从第一个元素开始，该元素可认为已排序
 35.	取下一个元素，对已排序数组从后往前扫描
 36.	若从排序数组中取出的元素大于新元素，则移至下一位置
 37.	重复步骤3，直至找到已排序元素小于或等于新元素的位置
 38.	插入新元素至该位置
 39.	重复2~5

 */

//todo
  @AlgoTag(tags = "sorting")
public class InsertSorter implements Sorter {

  @Override
  public void sort(int[] aList) {
   int len = aList.length;
    for (int i = 0; i < len; i++) {
      int index=i,current=aList[i];
      while(index>0 && aList[index-1]>aList[index]){
        aList[index]=aList[index-1];
        index-=1;
      }
      aList[index]=current;
    }
  }
}
