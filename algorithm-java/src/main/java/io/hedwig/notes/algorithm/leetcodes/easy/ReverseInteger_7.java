package io.hedwig.notes.algorithm.leetcodes.easy;

/**
 * @@author: patrick
 */
public class ReverseInteger_7 {

  public int reverse(int x){

    int temp=Math.abs(x);
    long result = 0;
    while(temp>0){
      int current = temp%10;
      result =result*10+current;
      if(result>Integer.MAX_VALUE
          ||result<Integer.MIN_VALUE){
        return 0;
      }
      temp = temp/10;
    }

    if(x<0){
      result = -result;
    }

    return (int) result;
  }
}
