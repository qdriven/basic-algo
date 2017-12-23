package io.hedwig.notes.algorithm.sortings;

/**
 * 1. author: patrick
 核心：基于插入排序，使数组中任意间隔为h的元素都是有序的，
 即将全部元素分为h个区域使用插入排序。
 其实现可类似于插入排序但使用不同增量。
 更高效的原因是它权衡了子数组的规模和有序性
 */
public class ShellSorter implements Sorter {

  @Override
  public void sort(int[] aList) {

  }
}
