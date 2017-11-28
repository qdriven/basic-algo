package io.hedwig.notes.algorithm.strings;

/**
 * 1. author: patrick
 */
public class LeftRotateString {

  /**
   * Move first element to last element in a array
   * switch one by one, O(N)
   * @param chars
   * @param n
   */
  public static void mvFistToLast(char [] chars, int n){
    char t = chars[0];
    for (int i = 1; i < n; i++) {
      chars[i-1]=chars[i];
    }
    chars[n-1]=t;
    System.out.println(chars);
  }

  /**
   * move first XX chars to the end
   * O(m*n)
   * @param chars: source array
   * @param position: the target position to move
   * @param numToMV: numbers chars(first @numToMV chars) to move
   */
  public static void rotateByMVF2L(char[] chars,
                                   int position,int numToMV){
    while(numToMV>0){
      mvFistToLast(chars,position);
      numToMV--;
    }
  }
}
