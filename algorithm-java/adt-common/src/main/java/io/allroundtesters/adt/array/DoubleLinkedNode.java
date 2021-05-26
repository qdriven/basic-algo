package io.allroundtesters.adt.array;

/**
 * @author Patrick
 **/
public class DoubleLinkedNode<T> {
    private DoubleLinkedNode head;
    private DoubleLinkedNode tail;
    private T data;

    public DoubleLinkedNode(DoubleLinkedNode head,
                            DoubleLinkedNode tail, T data) {
        this.head = head;
        this.tail = tail;
        this.data = data;
    }
}
