package io.hedwig.notes.algorithm.leetcodes.arraytag;

/**
 * @@author: patrick
 * 1. horizontally
 * 2. inverting each row
 */
public class FlippingAnImage_832 {
  public static int[][] flipAndInvertImage(int[][] A) {
    for (int i = 0; i < A.length; i++) {
      //to_horizontal
      int rowSize = A[i].length;
      int idx=0;
      int tmp;
      while(rowSize-idx-1>=idx){
        tmp=A[i][rowSize-1-idx];
        A[i][rowSize-1-idx]=A[i][idx]==1?0:1;
        A[i][idx]=tmp==1?0:1;
        idx++;
      }

    }

    return A;
  }

  public static void main(String[] args) {
    int[][] sample = new int[][]{
      new int[]{1,1,0},
      new int[]{1,0,1},
      new int[]{0,0,0},
    };
    System.out.println(sample.length);
    flipAndInvertImage(sample);
  }
}
