package io.allroundtesters.adt.stack;

/**
 * @author: patrick on 2019-02-03
 * @Description:
 */
public interface GenericStack<T> extends Iterable<T> {

  void push(T item);

  T pop();

  boolean isEmpty();

  int size();
}
