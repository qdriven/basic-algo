package io.hedwig.ds.card.array.quiz;

/**
 * @@author: patrick
 */
public class FindPivotIndex {

  /**
   * pivot index: sum of left equals sum of right
   * @param nums
   * @return index or -1 (not find pivot index
   */
  public static int pivotIndex(int[] nums) {
    if(nums.length<1) return -1;
    int total =0;
    for (int num : nums) {
      total+=num;
    }
    int left = 0;
    for (int i = 0; i < nums.length ; i++) {
       if(left== total-left-nums[i]){
         return i;
       }
       left+=nums[i];
    }
    return -1;
  }

  public static void main(String[] args) {
    int[] nums = new int[]{-1,-1,-1,0,1,1};
    System.out.println(pivotIndex(nums));
  }

}
