package io.hedwig.notes.algorithm.lintcode.entry;


import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * @author: patrick
 */
public class FibonacciTest {
  Fibonacci c ;
  @Before
  public void setup(){
    c=new Fibonacci();
  }
  @Test
  public void fibonacci_zero() throws Exception {
    Assert.assertEquals(c.fibonacci(0),0);
  }

  @Test
  public void fibonacci_one() throws Exception {
    Assert.assertEquals(c.fibonacci(1),0);
  }

  @Test
  public void fibonacci_two() throws Exception {
    Assert.assertEquals(c.fibonacci(2),1);
  }

  @Test
  public void fibonacci_three() throws Exception {
    Assert.assertEquals(c.fibonacci(3),1);
  }

  @Test
  public void fibonacci_four() throws Exception {
    Assert.assertEquals(c.fibonacci(4),2);
  }

  @Test
  public void fibonacci_ten() throws Exception {
    Assert.assertEquals(c.fibonacci(10),34);
  }

  //very slow for recursive
  @Test
  public void fibonacci_high() throws Exception {
    Assert.assertEquals(c.fibonacci(47),1836311903);
  }
}