package io.hedwig.notes.datastructure.list;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

/**
 * @@author: patrick
 */
public class MyArrayList<E> implements List<E> {

  private int size;
  private E[] array;

  @Override
  public int size() {
    return 0;
  }

  @Override
  public boolean isEmpty() {
    return false;
  }

  @Override
  public boolean contains(Object o) {
    return false;
  }

  @Override
  public Iterator<E> iterator() {
    return null;
  }

  @Override
  public Object[] toArray() {
    return new Object[0];
  }

  @Override
  public <T> T[] toArray(T[] a) {
    return null;
  }

  @Override
  public boolean add(E e) {
    //resize
    if(size>=array.length){
      E[] resizedArray = (E[]) new Object[array.length * 2];
      System.arraycopy(array,0,resizedArray,0,array.length);
      array=resizedArray;
    }
    array[size]=e;
    size++;
    return true;
  }

  @Override
  public boolean remove(Object o) {
    return false;
  }

  @Override
  public boolean containsAll(Collection<?> c) {
    return false;
  }

  @Override
  public boolean addAll(Collection<? extends E> c) {
    return false;
  }

  @Override
  public boolean addAll(int index, Collection<? extends E> c) {
    return false;
  }

  @Override
  public boolean removeAll(Collection<?> c) {
    return false;
  }

  @Override
  public boolean retainAll(Collection<?> c) {
    return false;
  }

  @Override
  public void clear() {

  }

  @Override
  public E get(int index) {
    verifyIndex(index);
    return array[index];
  }

  @Override
  public E set(int index, E element) {
   E old = get(index);
   array[index]=element;
   return old;
  }

  @Override
  public void add(int index, E element) {
    verifyIndex(index);
//    E old = get(index);
    add(element);
  }

  private void verifyIndex(int index) {
    if (index < 0 || index>size) {
      throw new IndexOutOfBoundsException();
    }
  }

  @Override
  public E remove(int index) {
   E element = get(index);
    System.arraycopy(array, index + 1, array, index, size - 1 - index);
    size--;
    return element;
  }

  @Override
  public int indexOf(Object o) {

    for (int i = 0; i < size; i++) {
      if(objEquals(o,array[i])) return i;
    }
    return -1;
  }

  private boolean objEquals(Object target, E element) {
    if(target==null){
      return element==null;
    }else{
      return target.equals(element);
    }
  }

  @Override
  public int lastIndexOf(Object o) {
    return 0;
  }

  @Override
  public ListIterator<E> listIterator() {
    return null;
  }

  @Override
  public ListIterator<E> listIterator(int index) {
    return null;
  }

  @Override
  public List<E> subList(int fromIndex, int toIndex) {
    return null;
  }
}
