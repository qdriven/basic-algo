package io.allroundtesters.adt.queue;

/**
 * @author: patrick on 2019-02-03
 * @Description:
 */
public interface GenericQueue<T> extends Iterable<T> {

  void enqueue(T item);
  T dequeue();
  boolean isEmpty();
  int size();
}
