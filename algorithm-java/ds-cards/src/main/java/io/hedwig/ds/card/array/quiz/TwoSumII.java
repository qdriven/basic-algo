package io.hedwig.ds.card.array.quiz;

/**
 * @@author: patrick
 */
public class TwoSumII {
  public int[] twoSum(int[] numbers, int target) {
    int lindex = 0, rindex = numbers.length-1,sum;
    while(lindex < rindex){
      sum = numbers[lindex]+numbers[rindex];
      if(sum == target){
        return new int[]{lindex+1, rindex+1};
      }
      else if(sum < target){
        lindex++;
      }
      else{
        rindex--;
      }
    }
    return new int[]{};
  }
}
