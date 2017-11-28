package io.hedwig.notes.datastructure.deque;

import java.util.ArrayDeque;
import java.util.Deque;

/**
 * 1. author: patrick
 */
public class DequeDemo {

  public static void main(String[] args) {
    Deque<Integer> deque = new ArrayDeque<>();
    for (int i = 0; i < 1000 ; i++) {
      deque.add(i);
    }
    System.out.println(deque.getFirst());
    System.out.println(deque.getLast());
    System.out.println(deque.pollFirst());
    System.out.println(deque.peekLast());
  }
}
