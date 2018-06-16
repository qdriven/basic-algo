package io.hedwig.notes.algorithm.leetcodes.easy;

import java.util.Arrays;

/**
 * @@author: patrick
 * Steps:
 * putting data from end of the array,
 */
public class MergeSortedArray_88 {
  public static void merge(int[] nums1, int m, int[] nums2, int n) {


//      if(m==0) {
//        nums1 = nums2;
//        System.out.println(nums1);
//        return;
//      }
    for (int i = 0; i < n; i++) {
      nums1[m+i] = nums2[i];
    }
    Arrays.sort(nums1);
//      int idx1 = m-1;
//      int idx2=n-1;
//      int idx =m+n-1;
//
//      while(idx>=0){
//        if(idx1>=0 &&idx2>=0){
//          if(nums1[idx1]>nums2[idx2]){
//            nums1[idx--]=nums1[idx1--];
//          }else{
//            nums1[idx--]=nums2[idx2--];
//          }
//        }else if(idx1<0){
//          while (idx2 > 0) {
//            nums1[idx--]=nums2[idx2--];
//          }
//          break;
//        }else {
//          break;
//        }
//      }
//
//    System.out.println(nums1);
  }

  public static void main(String[] args) {
    int result =Arrays.binarySearch(new int[]{2,5,6},1);
    System.out.println(result);
    merge(new int[0],0,new int[]{1},1);
  }
}
