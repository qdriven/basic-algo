package io.allroundtesters.algo;

import io.allroundtesters.utils.StdIn;
import io.allroundtesters.utils.StdOut;

/**
 * @author: patrick on 2019-08-29
 * @Description:
 */
public class Accumulator {

  private int n= 0;
  private double sum = 0.0 ; //sample variance *(n-1)
  private double mu = 0.0;

  /**
   * Adds the specified data value to the accumulator.
   *
   * @param x the data value
   */
  public void addDataValue(double x) {
    n++;
    double delta = x - mu;
    mu += delta / n;
    sum += (double) (n - 1) / n * delta * delta;
  }

  /**
   * Returns the mean of the data values.
   *
   * @return the mean of the data values
   */
  public double mean() {
    return mu;
  }

  /**
   * Returns the sample variance of the data values.
   *
   * @return the sample variance of the data values
   */
  public double var() {
    return sum / (n - 1);
  }

  /**
   * Returns the sample standard deviation of the data values.
   *
   * @return the sample standard deviation of the data values
   */
  public double stddev() {
    return Math.sqrt(this.var());
  }

  /**
   * Returns the number of data values.
   *
   * @return the number of data values
   */
  public int count() {
    return n;
  }

  /**
   * Unit tests the <tt>Accumulator</tt> data type.
   * Reads in a stream of real number from standard input;
   * adds them to the accumulator; and prints the mean,
   * sample standard deviation, and sample variance to standard
   * output.
   */
  public static void main(String[] args) {
    Accumulator stats = new Accumulator();
    while (!StdIn.isEmpty()) {
      double x = StdIn.readDouble();
      stats.addDataValue(x);
    }

    StdOut.printf("N      = %d\n", stats.count());
    StdOut.printf("mean   = %.5f\n", stats.mean());
    StdOut.printf("stddev = %.5f\n", stats.stddev());
    StdOut.printf("var    = %.5f\n", stats.var());
  }

}
