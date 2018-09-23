package io.hedwig.ds.card.string;

import org.junit.Assert;
import org.junit.Test;

import io.qameta.allure.Description;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;

/**
 * @@author: patrick
 */
@Epic("Alogrithm-Array/String")
@Feature("strStr function")
public class ImplementstrStrTest{

  @Test
  @Description("needle is in haystack")
  public void testImplTest_Bing(){
    int result = new ImplementstrStr().strStr("need","ed");
    Assert.assertEquals(2,result);
  }
  @Test
  @Description("needle is not in haystack")
  public void testImplTest_notfound(){
    int result = new ImplementstrStr().strStr("need","te");
    Assert.assertEquals(-1,result);
  }
}