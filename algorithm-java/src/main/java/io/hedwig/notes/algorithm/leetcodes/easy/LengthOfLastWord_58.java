package io.hedwig.notes.algorithm.leetcodes.easy;

/**
 * @@author: patrick
 */
public class LengthOfLastWord_58 {
  public static int lengthOfLastWord(String s) {
    if(s==null||s.trim().length()==0) return 0;
    int index = s.trim().lastIndexOf(" ");
    return s.trim().length()-1-index;
  }

  public static void main(String[] args) {
    System.out.println(lengthOfLastWord("Hello World"));
  }
}
