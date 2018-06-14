package io.hedwig.notes.algorithm.leetcodes.easy;

/**
 * @@author: patrick
 */
public class MaxiumSubarray_53 {

  public static int maxSubArray(int[] nums) {
    if (nums.length == 0) {
      return 0;
    }
    if (nums.length == 1) {
      return nums[0];
    }

    int maxSum = nums[0];
    for (int i = 0; i < nums.length; i++) {
      int sum = nums[i];
      if(sum>maxSum)  maxSum=sum;
      for (int j = i + 1; j < nums.length; j++) {
        sum = sum + nums[j];
        if (sum > maxSum) {
          maxSum = sum;
        }
      }
    }
    return maxSum;
  }

  public static int max2(int[] nums){
    int maxSum = nums[0];
    int sum = nums[0];
    for (int i = 1; i < nums.length; i++) {
      sum = Math.max(sum + nums[i], nums[i]);
      maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
  }

  public static void main(String[] args) {
    int result= maxSubArray(new int[]{-2,1});
    System.out.println(result);
  }
}
