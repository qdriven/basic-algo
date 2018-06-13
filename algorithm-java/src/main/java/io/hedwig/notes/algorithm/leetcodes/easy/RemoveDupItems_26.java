package io.hedwig.notes.algorithm.leetcodes.easy;

import java.util.HashMap;
import java.util.Map;

/**
 * @@author: patrick
 */
public class RemoveDupItems_26 {
  public static int removeDuplicates(int[] nums) {
    if(nums.length<=1) return nums.length;
    Map<Integer,Integer> result = new HashMap<>();
    for (int num : nums) {
      result.put(num,num);
    }

    return result.size();
  }

  public static void main(String[] args) {
    System.out.println(removeDuplicates(new int[]{1,1,2}));
    int[] nums =new int[]{2,23,24,1234};
    int i=0;
    for(int j=0; j< nums.length; j++) {
      if(nums[i] != nums[j]) {
        i++;
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

      }
    }
//    return i+1;
  }
}
