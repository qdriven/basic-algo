package io.hedwig.notes.algorithm.leetcodes.easy;

import java.util.Arrays;

/**
 * @@author: patrick
 */
public class SearchInsertValue_35 {
  public static int searchInsert(int[] nums, int target) {
    if(nums.length==0) return 0;
    if(nums[0]>=target) return 0;
    int startIndex =0;
    int endIndex=nums.length;

//    for (int i = startIndex; i < endIndex; i++) {
//      if(nums[i]==target) return i;
//    }
    while(startIndex<endIndex-1) {
      int mid = startIndex / 2 + endIndex - endIndex / 2;
      if (nums[mid] > target) {
        endIndex = mid;
      } else {
        if (nums[mid] == target)
          return mid;
        startIndex = mid;
      }
    }

    return startIndex+1;
  }

  public static void main(String[] args) {
   int result= searchInsert(new int[]{1,3,5,6},2);
   int result1= searchInsert(new int[]{1,3},2);
    System.out.println(result);
    System.out.println(result1);
    int target=3;
    int[] nums=new int[]{1,2,5,6};
    if (nums.length == 0) {
      System.out.println(0);
    }
    ;
    int m= Arrays.binarySearch(nums, target);
    System.out.println(m>=0?m:-m-1);
  }
}
