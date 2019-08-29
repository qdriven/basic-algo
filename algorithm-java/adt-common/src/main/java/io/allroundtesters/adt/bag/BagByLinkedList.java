package io.allroundtesters.adt.bag;

import org.jetbrains.annotations.NotNull;

import java.util.Iterator;
import java.util.NoSuchElementException;

/**
 * @author: patrick on 2019-08-29
 * @Description:
 */
public class BagByLinkedList<AnyType> implements Iterable<AnyType> {

  private NestedNode<AnyType> first;
  private int N;

  private static class NestedNode<AnyType> {

    private AnyType item;
    private NestedNode<AnyType> next;
  }

  public void add(AnyType item) {
    NestedNode<AnyType> oldfirst = first;
    first = new NestedNode<AnyType>();
    first.item = item;
    first.next = oldfirst;
    N++;
  }

  @NotNull
  @Override
  public Iterator<AnyType> iterator() {
    return new ListIterator<AnyType>(first);
  }

  private class ListIterator<AnyType> implements Iterator<AnyType> {

    private NestedNode<AnyType> current;

    public ListIterator(NestedNode<AnyType> first) {
      current = first;
    }

    public boolean hasNext() {
      return current != null;
    }

    public void remove() {
      throw new UnsupportedOperationException();
    }

    public AnyType next() {
      if (!hasNext()) {
        throw new NoSuchElementException();
      }
      AnyType item = current.item;
      current = current.next;
      return item;
    }
  }
}
