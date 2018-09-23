package io.hedwig.ds.card.array.quiz;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.function.ToIntFunction;

/**
 * @@author: patrick
 */
public class PascalTriangle {
  public List<List<Integer>> generate(int numRows) {
    List<Integer> last =new ArrayList<>();
    List<List<Integer>> result = new ArrayList<>();
    for (int i = 0; i < numRows; i++) {
      List<Integer> row = new ArrayList<>();
      if(i<=1){
        for (int j = 0; j <=i; j++) {
            row.add(1);
        }
      }else{
        row.add(1);
        for (int j = 0; j < last.size()-1; j++) {
          row.add(last.get(j)+last.get(j+1));
        }
        row.add(1);
      }
      last = row;
      result.add(row);
    }
    return result;
  }

  public static void main(String[] args) {
    System.out.println(new PascalTriangle().generate(5));
  }
}
