package io.hedwig.notes.algorithm.leetcodes.easy;

import java.util.HashMap;
import java.util.Map;

/**
 * @@author: patrick
 */
public class RamanToInteger_13 {

  public int romanToInt(String s) {
    if (s == null) {
      return 0;
    }
    if (s.trim().length() == 0) {
      return 0;
    }

    Map<Character, Integer> romanIntMap = new HashMap<>();
    romanIntMap.put('I', 1);
    romanIntMap.put('V', 5);
    romanIntMap.put('X', 10);
    romanIntMap.put('L', 50);
    romanIntMap.put('C', 100);
    romanIntMap.put('D', 500);
    romanIntMap.put('M', 1000);

    int result = 0;
    for (int i = 0; i < s.length()-1; i++) {
      int curVal = romanIntMap.get(s.charAt(i));
      if(curVal>=romanIntMap.get(s.charAt(i+1))){
        result=result+curVal;
      }else{
        result=result-curVal;
      }
    }

    return result+romanIntMap.get(s.charAt(s.length()-1));
  }

}
