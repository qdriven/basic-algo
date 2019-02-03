package io.allroundtester.revist.jcf.map;

import java.util.HashMap;
import java.util.Map;

/**
 * @author: patrick on 2019-02-02
 * @Description: Learning Mapping for balanceTree rehash
 */
public class MapLearn {

  public static void main(String[] args) {
    Map<Integer,String> map = new HashMap<Integer, String>();

    for (int i = 0; i < 1000; i++) {
        map.put(i,String.valueOf(i));
    }
    //balanced tree now
    System.out.println(map);
  }
}
