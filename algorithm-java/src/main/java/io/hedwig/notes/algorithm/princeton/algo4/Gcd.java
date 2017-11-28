package io.hedwig.notes.algorithm.princeton.algo4;

/**
 * 最大公约数求解
 * 1. 两个非负数p,q
 * 2. q=0,最大公约数是p
 * 3. 将 p 除以 q得到余数r，
 * p和q的最大公约数即为q和 r 的最大公约数。
 */
public class Gcd {

  public static int gcd(int p,int q){
    if(q==0) return p;
    int r = p%q;
    return gcd(q,r);
  }

  public static void main(String[] args) {
    int result = Gcd.gcd(10,5);
    System.out.println(result);
  }
}
