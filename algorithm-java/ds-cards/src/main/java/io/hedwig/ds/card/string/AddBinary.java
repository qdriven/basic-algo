package io.hedwig.ds.card.string;

/**
 * @@author: patrick
 * Given two binary strings, return their sum (also a binary string).
 *
 * The input strings are both non-empty and contains only characters 1 or 0.
 */
public class AddBinary {
  public String addBinary(String a, String b) {

    char[] arrA = a.toCharArray();
    char[] arrB = b.toCharArray();
    StringBuilder out = new StringBuilder();
    char carry = 0;
    int i = arrA.length-1, j = arrB.length-1;
    while(i>=0 || j>=0){
      carry /= 2;
      if(i >= 0){
        carry += arrA[i] - '0';
        i--;
      }
      if(j >= 0){
        carry += arrB[j] - '0';
        j--;
      }
      out.insert(0, (char)((carry > 1 ? carry - 2 : carry ) + '0'));
    }
    if(carry > 1) out.insert(0, '1');
    return out.toString();
  }
}
