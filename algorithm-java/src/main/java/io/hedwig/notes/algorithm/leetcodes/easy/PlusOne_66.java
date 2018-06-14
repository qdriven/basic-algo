package io.hedwig.notes.algorithm.leetcodes.easy;

import java.util.Arrays;

/**
 * @@author: patrick
 */
public class PlusOne_66 {

  public static int[] plusOne(int[] digits) {
    int size = digits.length;
    int lastDigit = digits[size-1];
    if(lastDigit==9){
      if(size==1){
        return new int[]{1,0};
      }
      digits[size-1] =0;
      int index = size-2;
      for (int i = index; i >0 ; i--) {
          int sum = digits[i]+1;
          if(sum==10){
            digits[i]=0;
          }else{
            digits[i]=sum;
            return digits;
          }
      }
      if(digits[0]+1==10){
       int[]result= new int[size+1];
       result[0]=1;
       return result;
      }else{
        digits[0]=digits[0]+1;
        return  digits;
      }
    }else{
      digits[size-1]=lastDigit+1;
      return digits;
    }

  }

  public static void main(String[] args) {
    System.out.println(plusOne(new int[]{8,9,9,9}));
  }
}
