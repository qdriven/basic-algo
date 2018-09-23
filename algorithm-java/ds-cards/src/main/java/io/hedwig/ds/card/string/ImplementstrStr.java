package io.hedwig.ds.card.string;

/**
 * @@author: patrick
 */
public class ImplementstrStr {
  public int strStr(String haystack, String needle) {
    if(needle==null) return 0;
    if(needle.equals("")) return 0;
    int step=needle.length();
    if(haystack.length()<needle.length()) return -1;
    for (int i = 0; i <=haystack.length()-step; i++) {
        if (haystack.substring(i, i + step).equals(needle)) {
          return i;
        }
    }
    return -1;
  }
}
