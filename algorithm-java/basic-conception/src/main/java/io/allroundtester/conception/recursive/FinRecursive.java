package io.allroundtester.conception.recursive;

/**
 * @author: patrick on 2019-02-03
 * @Description:
 */
public class FinRecursive {

  public static int f(int x) {
    if (x == 0) {
      return 0;
    } else {
      return 2 * f(x - 1) + x * x;
    }
  }

  public static void main(String[] args) {
    System.out.println(String.format("f(10)=%d",
                                     f(10)));
  }
}
