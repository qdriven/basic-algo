package io.hedwig.notes.algorithm.leetcodes.easy;

/**
 * @@author: patrick
 */
public class PalindromeNumber_9 {
  public boolean isPalindromeNumber(int x){

    int temp=x;
    int reverseNum = 0;
    while(temp>0){
      int current = temp%10;
      reverseNum=reverseNum*10+current;
      temp=temp/10;
    }
    return x==reverseNum;
  }

  public static void main(String[] args) {
    int x = 121;
    System.out.println(Integer.toString(x).
        equals(new StringBuilder(Integer.toString(x)).reverse().toString()));
  }
  //Integer.toString(x).equals(new StringBuilder(Integer.toString(x)).reverse().toString());
}
