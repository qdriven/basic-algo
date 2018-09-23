package io.hedwig.ds.card.string;

import java.util.Arrays;

/**
 * @@author: patrick
 */
public class LongestCommonPrefix {
  public String longestCommonPrefix(String[] strs) {
    //find the shortest string
    // then find out is there any common prefix based on the shortest string
    if (strs == null) return null;
    if (strs.length == 0) return "";

    Arrays.sort(strs);
    char[] first = strs[0].toCharArray();
    char[] last  = strs[strs.length - 1].toCharArray();

    int i = 0, len = Math.min(first.length, last.length);
    while (i < len && first[i] == last[i]) i++;
    return strs[0].substring(0, i);
  }


//  vector<int> getPattern(string s){
//    vector<int> pattern(s.size(), 0);
//    int index = 1, itr = 0;
//    while(index < s.size()){
//      while(itr > 0 && s[itr] != s[index])
//        itr = pattern[itr-1];
//      if(s[itr] == s[index])
//        itr++;
//      pattern[index] = itr;
//      index++;
//    }
//
//    return pattern;
//  }
//
//  int match(string a, string b, vector<int>& pattern){
//    int index = 0, itr = 0, c = 0;
//    while(index < a.size() && itr < b.size()){
//      while(itr > 0 && a[index] != b[itr])
//        itr = pattern[itr-1];
//
//      if(a[index] == b[itr])
//        itr++;
//
//      if(itr == 0)
//        break;
//
//      c = max(c, itr);
//
//      index++;
//    }
//
//    return min(c, (int)a.size());
//  }
//
//  string longestCommonPrefix(vector<string> &A) {
//    if(A.size() == 0)
//      return "";
//
//    if(A.size() == 1)
//      return A[0];
//
//    vector<int> pattern = getPattern(A[0]);
//    int mn = A[0].size();
//    for(int i = 0;i < A.size();i++){
//      mn = min(mn, match(A[0], A[i], pattern));
//    }
//    return A[0].substr(0,mn);
//  }
}
