package io.allroundtesters.algo;

import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by patrick on 16/4/21.
 */
public class MaximumSubArray {
    /**
     * Kadane's algorithm
     * @param args
     */
    public static void main(String[] args) {
        List<Integer> subArrays = Lists.newArrayList(-2, 1, -3, 4, -1, 2, 1, -5, 4);
        Integer maxEndingHere = 0;
        Integer maxSumSoFar = 0;
        for (Integer item : subArrays) {

            maxEndingHere = max(item,maxEndingHere+item);
            maxSumSoFar=max(maxSumSoFar,maxEndingHere);
        }
        System.out.println(maxSumSoFar);
    }

    public static Integer max(Integer item1,Integer item2){
        return item1>item2?item1:item2;
    }
}
