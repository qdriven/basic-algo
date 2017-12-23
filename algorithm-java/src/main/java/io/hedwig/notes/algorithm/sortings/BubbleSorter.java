package io.hedwig.notes.algorithm.sortings;

import io.hedwig.notes.algorithm.annotations.AlgoTag;

/**
 * @author: patrick
 * o(n^2)
 */
@AlgoTag(tags = "sorting")
public class BubbleSorter implements Sorter{
  private int moveCounter = 0;
  private int swapCounter =0;
  @Override
  public void sort(int[] aList) {
    for (int i = 0; i < aList.length-1; i++) {
      for (int j = aList.length-1; j>=i+1;j--) {
        //swap
        this.moveCounter++;
        int tmp;
        if(aList[j]<aList[j-1]){
          this.swapCounter++;
          tmp=aList[j];
          aList[j]=aList[j-1];
          aList[j-1]=tmp;
        }
      }
    }
    System.out.println(this.moveCounter);
    System.out.println(this.swapCounter);
  }
}
