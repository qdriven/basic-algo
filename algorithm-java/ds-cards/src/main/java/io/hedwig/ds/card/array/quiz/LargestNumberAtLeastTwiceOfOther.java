package io.hedwig.ds.card.array.quiz;

/**
 * @@author: patrick
 */
public class LargestNumberAtLeastTwiceOfOther {
  public int dominantIndex(int[] nums) {
//    find largest and second largest one, then compare
    int max = -1, index = -1, second = -1;
    for (int i = 0; i < nums.length; i++) {
      if(nums[i]>max){
        second=max;
        max = nums[i];
        index= i;
      }else{
        if(nums[i]>second){
          second=nums[i];
        }
      }
    }

    return max>=second*2?index:-1;
  }
}
