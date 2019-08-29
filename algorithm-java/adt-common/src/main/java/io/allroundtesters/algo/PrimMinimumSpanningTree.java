package io.allroundtesters.algo;

import javax.swing.text.GapContent;

/**
 * <li>说明 Prim算法是最小生成树算法。思想是随便取出一点，比较这点与其余点的权值，选出最小的权值，把对应的点加入最小生成树。然后比较最小生成树中这两个点的所有权值，取出最小的权值，再把对应的点加入最小生成树，以此类推……
 * <li>作者 zer0
 * <li>创建日期 2015-6-16
 */
public class PrimMinimumSpanningTree {

	/**
	 * <li>方法名 prim
	 * <li>@param graph
	 * <li>返回类型 void
	 * <li>说明 prim算法生成最小生成树
	 * <li>作者 zer0
	 * <li>创建日期 2015-6-16
	 */
	public static void prim(int[][] graph){
		int graphLength = graph.length;
		//存储相关顶点间边的权值，并不断的比较生成树中各点的对应权值加入到此数组中
		int lowcost[] = new int[graphLength];
		//存储相关顶点的下标，即起始点
		int adjvex[] = new int[graphLength];
		int sum = 0;//计算总权值
		
		//设以V0为起点，初始化数组
		for (int i = 0; i < graphLength; i++) {
			//把V0点的所有相关边的权值存入到数组
			lowcost[i] = graph[0][i];
			//暂时把所有的起点都设为0
			adjvex[i] = 0;
		}
		
		//循环一次，把一个点加入最小生成树，假设共n个点，则需循环n-1次（在初始化的时候已经把一个点加入最小生成树）
		for (int i = 1; i < graphLength; i++) {
			
			int min = Integer.MAX_VALUE;
			int minVex = 0;
			
			//此次循环用户比较lowcost数组中的最小的权值，取出最小权值对应的终点
			for (int j = 1; j < graphLength; j++) {
				//lowcost[j]=0代表改点已被加入最小生成树
				if (lowcost[j] != 0 && lowcost[j] < min) {
					min = lowcost[j];
					minVex = j;
				}
			}
			
			sum += min;
			System.out.println("最小权值的点是：【 " + adjvex[minVex] + "," + minVex +"】");
			lowcost[minVex] = 0;//把得到的权值最小的点加入最小生成树
			
			//这次循环是更新lowcost，把刚才得到的最小权值对应的点所 相关的最小权值对比之前的lowcost中的值，把小的权值加入lowcost数组
			for (int j = 1; j < graphLength; j++) {
				if (lowcost[j] != 0 && graph[minVex][j] < lowcost[j]) {
					lowcost[j] = graph[minVex][j];
					adjvex[j] = minVex;//更换终点
				}
			}
		}
		
		System.out.println("总权值="+sum);
	}
	
	 public static void main(String[] args) {
		 int MAX = Integer.MAX_VALUE; 
         int[][] map = new int[][]{
        		 {0,10,MAX,MAX,MAX,11,MAX,MAX,MAX},
        		 {10,0,18,MAX,MAX,MAX,16,MAX,12},
        		 {MAX,MAX,0,22,MAX,MAX,MAX,MAX,8},
        		 {MAX,MAX,22,0,20,MAX,MAX,16,21},
        		 {MAX,MAX,MAX,20,0,26,MAX,7,MAX},
        		 {11,MAX,MAX,MAX,26,0,17,MAX,MAX},
        		 {MAX,16,MAX,MAX,MAX,17,0,19,MAX},
        		 {MAX,MAX,MAX,16,7,MAX,19,0,MAX},
        		 {MAX,12,8,21,MAX,MAX,MAX,MAX,0}
         		};
         
         prim(map);
	 }
}
