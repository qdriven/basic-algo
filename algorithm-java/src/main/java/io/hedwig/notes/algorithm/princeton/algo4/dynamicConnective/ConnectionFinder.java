package io.hedwig.notes.algorithm.princeton.algo4.dynamicConnective;

/**
 * @@author: patrick
 *
 * Abstraction Description:
 * 1. p is connect to p
 * 2. Symmetrics if p is connected to q, then q is connected to p
 * 3. Transitive if p is connected to q and q is connected to r
 *    then p is connected to r
 *
 * connect component
 *
 * union-find:
 * API Design
 * TDD
 */
public class ConnectionFinder {
  private int[] id;
  /**
   * init numbers
   */
  public ConnectionFinder(int size) {
     id =new int[size];
    for (int i = 0; i <size; i++) {
      id[i]=i;
    }
  }

  boolean connected(int p,int q){
    return id[q]==id[q];
  }

  int find(){
    throw new RuntimeException("not implemented");
  }

  //n^2
  void union(int p,int q){
    int pid = id[p];
    int qid =id[q];
    for (int i = 0; i < id.length; i++) {
      if(id[i]==pid) id[i]=qid;
    }
  }

  int count(){
    return 0;
  }

}
