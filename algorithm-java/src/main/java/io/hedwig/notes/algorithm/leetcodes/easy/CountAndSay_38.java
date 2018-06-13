package io.hedwig.notes.algorithm.leetcodes.easy;

/**
 * @@author: patrick
 */
public class CountAndSay_38 {
  public static String countAndSay(int n) {
    String s = "1";
    for(int i = 1; i < n; i++){
      s = compress(s);
    }

    return s;
  }

  public static String compress(String s){
    char[] arr = s.toCharArray();
    int count = 1;
    StringBuilder sb = new StringBuilder();
    for(int i = 0; i < arr.length; i++){
      if(i + 1 >= arr.length || arr[i] != arr[i+1]){
        sb.append(count);
        sb.append(arr[i]);
        count = 1;
      } else {
        count ++;
      }
    }
    return sb.toString();
  }

  public static void main(String[] args) {
    System.out.println(countAndSay(5));
  }

}
