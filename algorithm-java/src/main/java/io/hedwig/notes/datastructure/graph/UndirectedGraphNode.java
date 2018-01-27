package io.hedwig.notes.datastructure.graph;

import java.util.ArrayList;

/**
 * 无向图
 */
public class UndirectedGraphNode {

  int label;
  ArrayList<UndirectedGraphNode> neighbors;

  UndirectedGraphNode(int x) {
    this.label = x;
    this.neighbors = new ArrayList<>();
  }
}
 
