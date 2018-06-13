package io.hedwig.notes.algorithm.leetcodes.easy;

/**
 * @@author: patrick
 */
public class RemoveElement_27 {

  public static int removeElement(int[] nums, int val) {
    int result =0;
    int valCount=0;
    for (int i = 0; i < nums.length; i++) {
      if(nums[i]!=val){
        result+=1;
        if(valCount>=1){
          nums[i-valCount]=nums[i];
          nums[i]=val;
        }
      }else{
        valCount+=1;
      }
    }
    System.out.println(nums);
    return result;
  }

  public static int remove2(int[] nums,int val){
    int len = 0;
    for(int i = 0; i < nums.length; i++) {
      if(nums[i] != val) {nums[len++] = nums[i];}
    }
    return len;
  }

  public static int remove3(int[] nums,int val){
    int len = 0;
    for(int i = 0; i < nums.length; i++) {
      if(nums[i] == val) continue;
      else{
        nums[len]=nums[i];
        len++;
      }
    }
    System.out.println(nums);
    return len;
  }
  public static void main(String[] args) {
    removeElement(new int[]{3,2,2,3},3);
    removeElement(new int[]{0,1,2,2,3,0,4,2},2);
    remove2(new int[]{3,2,2,3},3);
    remove2(new int[]{0,1,2,2,3,0,4,2},2);
  }
}
