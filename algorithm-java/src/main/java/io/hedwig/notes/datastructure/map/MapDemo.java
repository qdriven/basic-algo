package io.hedwig.notes.datastructure.map;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * 1. author: patrick
 */
public class MapDemo {

  public static void main(String[] args) {
    Map<String, Integer> map = new HashMap<String, Integer>();
    map.put("bill", 98);
    map.put("ryan", 99);
    boolean exist = map.containsKey("ryan"); // check key exists in map
    int point = map.get("bill"); // get value by key
    int point1 = map.remove("bill"); // remove by key, return value
    Set<String> set = map.keySet();
// iterate Map
    for (Map.Entry<String, Integer> entry : map.entrySet()) {
      String key = entry.getKey();
      int value = entry.getValue();
      // do some thing
      System.out.println(String.format("key=%s,value=%s", key,value));
    }

  }
}
