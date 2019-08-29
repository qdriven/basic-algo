package io.allroundtesters.algo;

/**
 * <li>说明 冒泡排序，最基本的排序方法
 * <li>作者 zer0
 * <li>创建日期 2015-6-01
 */
public class BubbleSort {
	
	static void BubbleSort(int a[], int size)  
	{  
	    boolean bSwaped = true;  
	    for (int i = 1; i < size; i++)  
	    {  
	        // 每次先重置为false  
	        bSwaped = false;  
	        for (int j = size - 1; j >= i ; j--)  
	        {  
	            if (a[j-1] > a[j])  
	            {  
	                int temp = a[j-1];  
	                a[j-1] = a[j];  
	                a[j] = temp;  
	  
	                //无论哪种交换都一样
//	                int temp2 = a[j];
//	                a[j] = a[j-1];
//	                a[j-1] = temp2;
	                
	                bSwaped = true;  
	            }  
	        }
	        
	     // 如果上一次扫描没有发生交换，则说明数组已经全部有序，退出循环  
//	        if (!bSwaped)  
//	            break;  
	    }  
	}
	
	public static void main(String[] args){
		int unsort[] = {7,8,10,11,12,22,16,20,16,20,16,21,26,17,18,19};
		int unsortSize = unsort.length;
		
		BubbleSort(unsort, unsortSize);
		
		for (int i = 0; i < unsortSize; i++) {
			System.out.println(unsort[i]);
		}
	}
}
