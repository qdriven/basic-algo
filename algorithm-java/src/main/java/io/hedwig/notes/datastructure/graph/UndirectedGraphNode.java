package io.hedwig.notes.datastructure.graph;

import java.util.ArrayList;

public class UndirectedGraphNode {

  int label;
  ArrayList<UndirectedGraphNode> neighbors;

  UndirectedGraphNode(int x) {
    this.label = x;
    this.neighbors = new ArrayList<UndirectedGraphNode>();
  }
}
 
