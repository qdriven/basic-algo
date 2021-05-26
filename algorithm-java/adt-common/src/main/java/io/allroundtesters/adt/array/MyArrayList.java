package io.allroundtesters.adt.array;

import jdk.internal.util.ArraysSupport;

import java.util.Arrays;

/**
 * @author Patrick
 **/
public class MyArrayList<T> {
    private Object[] elementData;
    private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};
    private int DEFAULT_CAP_SIZE = 16;
    private int size;

    public MyArrayList() {
        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
    }

    public MyArrayList(int capacity) {
        if (capacity > 0) {
            this.elementData = new Object[capacity];
        } else {
            this.elementData = new Object[DEFAULT_CAP_SIZE];
        }
    }

    public int size() {
        return elementData.length;
    }

    public Object get(int index) {
        if (index > this.size()) {
            throw new IndexOutOfBoundsException("index is out of bounds");
        }
        return this.elementData[index];
    }


    private Object[] grow(int minCapacity) {
        int oldCapacity = elementData.length;
        if (oldCapacity > 0 || elementData != DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
            int newCapacity = ArraysSupport.newLength(oldCapacity,
                    minCapacity - oldCapacity, /* minimum growth */
                    oldCapacity >> 1           /* preferred growth */);
            return elementData = Arrays.copyOf(elementData, newCapacity);
        } else {
            return elementData = new Object[Math.max(DEFAULT_CAP_SIZE, minCapacity)];
        }
    }

    private Object[] grow() {
        return grow(size + 1);
    }

    /**
     *
     * @param data
     */
    public void insert(T data){

    }
}
