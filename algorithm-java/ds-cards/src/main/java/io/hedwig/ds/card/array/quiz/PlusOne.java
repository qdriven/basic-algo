package io.hedwig.ds.card.array.quiz;

/**
 *
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Example 2:
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * @@author: patrick
 */
public class PlusOne {
  public int[] plusOne(int[] digits) {

    for (int i = digits.length-1; i >=0 ; i--) {
      if(digits[i]+1<=9){
        digits[i]=digits[i]+1;
        return digits;
      }else{
        digits[i]=0;
      }
    }
    //how to add
    int[] newDigits = new int[digits.length+1];
    newDigits[0]=1;
    for (int i = 1; i < newDigits.length; i++) {
      newDigits[i]=digits[i-1];
    }
    return newDigits;
  }
}
