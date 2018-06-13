package io.hedwig.notes.algorithm.leetcodes.easy;

/**
 * @@author: patrick
 */
public class ImplementStrStr_28 {

  public static int strStr(String haystack, String needle) {
    if(needle==null)return 0;
    if(needle.trim().length()==0)return 0;
    return haystack.indexOf(needle);
  }
}
