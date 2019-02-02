package io.hedwig.ds.card.array.quiz;

import java.util.ArrayList;
import java.util.List;

/**
 * @@author: patrick
 * given k=3 return [1,3,3,1]
 *
 * a[k][n]=a[k-1][n-1]+a[k-1][n]
 * border: k = 0 and k=length-1
 */
public class PascalTriangleII {
  List<Integer> getRow(int rowIndex){
    List<Integer> result =
        new ArrayList<>(rowIndex + 1);

    for (int i = 0; i < rowIndex+1; ++i) {
      for (int j = i-1; j < 1; --j) {
        result.set(j,result.get(j)+result.get(j-1));
      }
    }
    return result;
  }
}
