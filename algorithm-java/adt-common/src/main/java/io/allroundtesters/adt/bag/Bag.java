package io.allroundtesters.adt.bag;

import java.util.Iterator;
import java.util.Spliterator;
import java.util.function.Consumer;

import io.allroundtesters.adt.type.AnyType;

/**
 * @author: patrick on 2019-02-03
 * @Description:
 */
public class Bag implements Iterable<AnyType> {

  private int size;
  private final int DEFAULT_SIZE=30;
  private transient AnyType[] table;

  public Bag() {
    this.size = 0;
    this.table = new AnyType[this.DEFAULT_SIZE];
  }

  void add(AnyType item) {
    //todo: consider resize the table
    this.table[this.size] = item;
    this.size++;
  }

  boolean isEmpty() {
    return this.size == 0;
  }

  int size() {
    return this.size;
  }

  @Override
  public Iterator<AnyType> iterator() {
    return null;
  }

  @Override
  public void forEach(Consumer<? super AnyType> action) {

  }

  @Override
  public Spliterator<AnyType> spliterator() {
    return null;
  }
}
