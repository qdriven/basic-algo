package io.hedwig.ds.card.array.quiz;

/**
 * @@author: patrick
 */
public class LargestNumberAtLeastTwiceOfOther {
  public int dominantIndex(int[] nums) {
//    find largest and second largest one, then compare
    if(nums.length<2) return -1;
    int lIndex = 0;
    int sIndex = 1;
    if(nums[0]<nums[1]){
      lIndex=1;
      sIndex=0;
    }

    for (int i = 2; i < nums.length; i+=2) {
      //find largest and second largest
    }
    return -1;
  }
}
