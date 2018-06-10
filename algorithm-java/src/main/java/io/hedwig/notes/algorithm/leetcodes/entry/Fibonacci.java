package io.hedwig.notes.algorithm.leetcodes.entry;

import io.hedwig.notes.algorithm.annotations.AlgoTag;

/**
 * @author: patrick
 *
 * location: http://www.lintcode.com/zh-cn/problem/fibonacci/
 */
@AlgoTag(tags={"recursive","math","enum"})
public class Fibonacci {

  /**
   * much more quicker than recursive
   * @param n
   * @return
   */
  public int fibonacci(int n) {
    // write your code here
    if(n<=1) return 0;
    if(n==2) return 1;
    int[] container = new int[n] ;
    container[0]=0;
    container[1]=1;
    for (int i = 2; i < n; i++) {
      container[i]=container[i-2]+container[i-1];
    }
    return container[n-1];

  }


  public int fibonacciRecursive(int n) {
    // write your code here
    if(n<=1) return 0;
    if(n==2) return 1;

    return fibonacci(n-1)+fibonacci(n-2);

  }

}
