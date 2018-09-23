package io.hedwig.ds.card.array.quiz;

/**
 * @@author: patrick
 */
public class MaxConsecutiveOnes {

  public int findMaxConsecutiveOnes(int[] nums) {
    int maxConsecutiveOnes = 0;
    int lastOne=0;
    int count = 0;
    if(nums[0]==1){
      count=1;
      maxConsecutiveOnes=1;
      lastOne=1;
    }
    for (int i = 1; i < nums.length; i++) {
      if(nums[i]==1){
        if(nums[i]==lastOne){
          count++;
        }else{
          count=1;
        }
      }else{
        if(count>0){
          if(count>maxConsecutiveOnes){
            maxConsecutiveOnes=count;
          }
        }
      }
      lastOne=nums[i];
    }

    return count>maxConsecutiveOnes?count:maxConsecutiveOnes;
  }
}
