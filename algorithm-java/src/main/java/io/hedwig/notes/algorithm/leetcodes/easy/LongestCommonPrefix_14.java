package io.hedwig.notes.algorithm.leetcodes.easy;

/**
 * @@author: patrick
 * common prefix, means first X characters
 */
public class LongestCommonPrefix_14 {
  public String longestCommonPrefix(String[] strs) {

    if (strs==null ||strs.length==0)return "";
    String prefix = strs[0]; //set prefix-string
    int i=1;
    while(i<strs.length && prefix.length()!=0){
      if(strs[i].length()<prefix.length()){
        prefix=prefix.substring(0,strs[i].length());
      }
      if(!strs[i].substring(0, prefix.length()).contains(prefix)){
        prefix=prefix.substring(0,prefix.length()-1);
      }
      else{
        ++i;
      }
    }
    return prefix;
  }
}
