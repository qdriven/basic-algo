package io.hedwig.notes;

/**
 * @@author: patrick
 */
public class FibnocciTry {
  //空间换时间
  public static void calculateFibByArray(){
    Integer [] f = new Integer[1000];
    f[0]=1;
    f[1]=1;
    for (int i = 2; i < 100 ; i++) {
      f[i] = f[i-2]+f[i-1];
    }
    System.out.println(f[99]);

  }

  public static int recusiveCal(int n){
    if(n==1) return 1;
    if (n==2) return 1;
    return recusiveCal(n-2)+recusiveCal(n-1);
  }
  public static void main(String[] args) {
//    recusiveCal(100);
    System.out.println(new Integer(1).equals(new Integer(1)));
  }

}
