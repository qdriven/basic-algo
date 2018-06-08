package io.hedwig.notes.algorithm.sortings.timing;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

/**
 * @@author: patrick
 */
public class BigNumSorting {

  private static List<Integer> randomInt(int size){
    List<Integer> result = new ArrayList<>();
    for (int i = 0; i < size; i++) {
      result.add(new Random().nextInt(30000000));
    }

    return result;
  }
   static String getSaltString() {
    String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    StringBuilder salt = new StringBuilder();
    Random rnd = new Random();
    while (salt.length() < 10) { // length of the random string.
      int index = (int) (rnd.nextFloat() * SALTCHARS.length());
      salt.append(SALTCHARS.charAt(index));
    }
    String saltStr = salt.toString();
    return saltStr;
  }

  private static Map<String,Integer> randomMap(int size){
    Map<String,Integer> result = new HashMap<>();

    for (int i = 0; i < size; i++) {
     result.put(getSaltString(),i);
    }

    return result;
  }

  public static void main(String[] args) {
    long start = System.currentTimeMillis();
    Map<String,Integer> result = randomMap(10000000);
    System.out.println(result.size());
    long end = System.currentTimeMillis();
    System.out.println(end-start);
//    System.out.println(ObjectSizeFetcher.getObjectSize(result));
    List<Map.Entry<String, Integer>> topK = result.entrySet()
    .stream().sorted(Map.Entry.comparingByValue()).limit(100)
    .collect(Collectors.toList());
    end = System.currentTimeMillis();
    System.out.println(end-start);
    System.out.println(topK);
  }
}
