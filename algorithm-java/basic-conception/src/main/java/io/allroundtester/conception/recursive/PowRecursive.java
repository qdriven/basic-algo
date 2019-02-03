package io.allroundtester.conception.recursive;

/**
 * @author: patrick on 2019-02-03
 * @Description:
 */
public class PowRecursive {
  public static boolean isEven(int n){
    return n%2==0;
  }

  public static long pow(long x,int n){
    if (n==0) return 1;
    if (n==1) return x;
    if (isEven(n)){
      return pow(x*x,n/2);
    }else{
      return pow(x*x,n/2)*x;
    }
  }

  public static void main(String[] args) {
    System.out.println(pow(10,5));
  }
}
