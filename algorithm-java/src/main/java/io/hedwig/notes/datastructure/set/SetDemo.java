package io.hedwig.notes.datastructure.set;

import java.util.HashSet;
import java.util.Set;

/**
 * 1. author: patrick
 */
public class SetDemo {

  public static void main(String[] args) {
    Set<String> hash = new HashSet<>();
    hash.add("billryan");
    hash.add("test");
    System.out.println(hash.contains("test"));
  }
}
