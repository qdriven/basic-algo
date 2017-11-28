package io.hedwig.notes.datastructure.graph;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 *
 */
public class DFSDemo {
  private Map<Integer,Set<Integer>> map = new HashMap<Integer, Set<Integer>>();
  private Set<Integer> visited = new HashSet<Integer>();
  private int numCourses;

  public boolean canFinish(int numCourses,
                           int[][] preconditions){
    visited.clear();
    this.numCourses=numCourses;
    return true;
  }
}
