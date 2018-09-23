package io.hedwig.ds.card.array.quiz;

/**
 * @@author: patrick
 */
public class MinSizeSubArray {

  public int minSubArrayLen(int s, int[] a) {

    if (a == null || a.length == 0)
      return 0;

    int i = 0, j = 0, sum = 0, min = Integer.MAX_VALUE;

    while (j < a.length) {
      sum += a[j++];

      while (sum >= s) {
        min = Math.min(min, j - i);
        sum -= a[i++];
      }
    }

    return min == Integer.MAX_VALUE ? 0 : min;

  }

//  public int minSubArrayLen(int s, int[] nums) {
//    int i = 1, j = nums.length, min = 0;
//    while (i <= j) {
//      int mid = (i + j) / 2;
//      if (windowExist(mid, nums, s)) {
//        j = mid - 1;
//        min = mid;
//      } else i = mid + 1;
//    }
//    return min;
//  }
//
//
//  private boolean windowExist(int size, int[] nums, int s) {
//    int sum = 0;
//    for (int i = 0; i < nums.length; i++) {
//      if (i >= size) sum -= nums[i - size];
//      sum += nums[i];
//      if (sum >= s) return true;
//    }
//    return false;
//  }
}
