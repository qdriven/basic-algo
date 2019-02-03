package io.allroundtester.conception.recursive;

/**
 * @author: patrick on 2019-02-03
 * @Description:
 */
public class GcdWhile {

  public static long GCD(long m,long n){
    while(n!=0){
      long rem = m%n;
      m=n;
      n=rem;
    }
    return m;
  }

  public static void main(String[] args) {
    System.out.println(GCD(10,5));
  }
}
