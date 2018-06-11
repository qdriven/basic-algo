package io.hedwig.notes.algorithm.leetcodes.easy;

import java.util.EmptyStackException;
import java.util.Stack;

/**
 * @@author: patrick
 */
public class ValidParentheses_20 {

  public boolean isValid(String s) {

    Stack<Character> s1 = new Stack<>();//()
    s1.push('-');

    for (int i = 0; i < s.length(); i++) {

      if (s.charAt(i) == '(' || s.charAt(i) == '[' ||
          s.charAt(i) == '{') {
        s1.push(s.charAt(i));
      }

      if (s.charAt(i) == ')') {
        if (s1.pop() != '(') {
          return false;
        }
      }

      if (s.charAt(i) == ']') {
        if (s1.pop() != '[') {
          return false;
        }
      }
      if (s.charAt(i) == '}') {
        if (s1.pop() != '{') {
          return false;
        }
      }
    }

    return s1.pop() == '-';
  }

  public static void main(String[] args) {
    String input = args[0];
    char[] stack = new char[input.length()];
    int m = 0;
    for (char c : input.toCharArray()) {
      if (m != 0 && ((stack[m - 1] == '{' && c == '}') ||
                     (stack[m - 1] == '[' && c == ']') ||
                     (stack[m - 1] == '(' && c == ')'))) {
        m--;
      } else {
        stack[m] = c;
        m++;
      }
    }
    System.out.println(m == 0 ? true : false);

  }
}
