/**
 * 1. author: patrick
 * 2. address: github.com/ideafortester
 *
 * Node as object
 * and edge as pointers
 *
 * A list of edges represents by two nodes
 * A adjacent list,adjacent matrics
 * Find cycles or topology in a graph
 * if there is no cycle, this graph is a topology
 * go as deeper as possible,never meet self,
 * then it is topology
 *
 * Directed Graphs
 * - DFS
 * - Topological Sorting for directed acyclic graphs(DAG)
 * 图的表示通常使用邻接矩阵和邻接表，前者易实现但是对于稀疏矩阵会浪费较多空间，
 * 后者使用链表的方式存储信息但是对于图搜索时间复杂度较高。
 */
package io.hedwig.notes.datastructure.graph;