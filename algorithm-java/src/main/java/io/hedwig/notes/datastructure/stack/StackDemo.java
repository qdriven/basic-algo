package io.hedwig.notes.datastructure.stack;

import java.util.ArrayDeque;
import java.util.Deque;

/**
 * @author: patrick
 * stack 替换deque
 */
public class StackDemo {

  public static void main(String[] args) {
    Deque<Integer> stack = new ArrayDeque<>();
    stack.add(1234);
    stack.add(890382);
    stack.push(99032);
    stack.push(9832);
    System.out.println(stack.peek());
    System.out.println(stack.pop());
    System.out.println(stack.size());
  }
}
