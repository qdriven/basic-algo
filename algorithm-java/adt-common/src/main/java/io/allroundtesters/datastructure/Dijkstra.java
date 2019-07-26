package io.allroundtesters.datastructure;

import javax.swing.text.html.MinimalHTMLWriter;

/**
 * <li>说明 Dijkstra算法是用于搜寻图中最小路径的著名算法，思想求出每个点与远点的最小路径长度，最后就能得到任一点与原点的最小路径长度
 * <li>作者 zer0
 * <li>创建日期 2015-6-17
 */
public class Dijkstra {
	
	public static void Dijsktra(int[][] graph, int startPoint){
		//图的长度
		int graphLength = graph.length;
		//图中的顶点数，由图的邻接矩阵总数开方得到
		int pointNum = (int) Math.sqrt(graphLength);
		//该数组存储的是该点的最短路径前驱点，比如patharc[6]=3,说明顶点v6的前驱点是v3
		int[] patharc = new int[pointNum];
		//该数组存储的是各点到初始点的最端路径，比如shortPathTable = {0,1,4,7,5,10},说明v0→v1的最短路径是1，v0→v2的最短路径是4，
		// 															    v0→v3的最短路径是7，v0→v4的最短路径是5.
		int[] shortPathTable = new int[pointNum];
		//finals[w]=1表示v0→vw的最短路径已求得
		int[] finals = new int[pointNum];
		//----------初始化开始-------------
		
		//finals都初始化为0，代表v0到所有点的最短路径都未求得
		//patharc也都初始化为0，代表目前任何点的前驱点都为v0（即表示最短路径还不存在）
		//shortPathTable初始化为v0的相关点的权值，表明求从v0开始到其他点的最短路径
		for (int i = 0; i < pointNum; i++) {
			finals[i] = 0;
			patharc[i] = 0;
			shortPathTable[i] = graph[0][i];
		}
		//把shortPathTable[0]设为0，代表v0→v0的最短路径权值为0
		shortPathTable[0] = 0;
		//把finals[0]设为1，代表v0到v0的最短路径已经求得
		finals[0] = 1;
		
		//----------初始化完毕-------------
		
		//----------正式开始循环，求v0到每一点的最短路径-------------
		
		//除v0以外都要循环，所以循环pointNum-1次，即从i=1开始循环
		for (int i = 1; i < pointNum; i++) {
			int min = Integer.MAX_VALUE;
			int minVex = 0;
			
			//此次循环通过比较shortPathTable的大小，来求得最短距离的点
			for (int j = 0; j < pointNum; j++) {
				if (finals[j] != 1 && shortPathTable[j] < min) {
					min = shortPathTable[j];
					minVex = j;
				}
			}
			//把找出来的最短路径的点标记为已找到最短路径
			finals[minVex] = 1;
			
			//此次循环用于更新每个点的最短路径
			for (int j = 0; j < pointNum; j++) {
				if (finals[j] != 0 && min + graph[minVex][j] < shortPathTable[j]) {
					shortPathTable[j] = min + graph[minVex][j];
					patharc[j] = minVex;
				}
			}
			
		}
		
		for (int i = 0; i < pointNum; i++) {
			System.out.println("v0到v"+i+"的最短路径为"+shortPathTable[i]);
		}
		
	}
	
	public static void main(String[] args) {
		final int maxDis = Integer.MAX_VALUE;
	    final int minDis = 0; 
		int[][] inputMatrix = new int[][] { { minDis, 2, maxDis, 1, maxDis, maxDis, maxDis }, { maxDis, minDis, maxDis, 3, 10, maxDis, maxDis },  
                { 4, maxDis, minDis, maxDis, maxDis, 5, maxDis }, { maxDis, maxDis, 2, minDis, 2, 8, 4 },  
                { maxDis, maxDis, maxDis, maxDis, minDis, maxDis, 6 }, { maxDis, maxDis, maxDis, maxDis, maxDis, minDis, maxDis },  
                { maxDis, maxDis, maxDis, maxDis, maxDis, 1, minDis } };  
		
		Dijsktra(inputMatrix, 0);
	}
	
}
