package io.allroundtesters.leetcode.arrays;

import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by patrick on 16/3/13.
 *
 */
public class SortedArrayMerger {

    private List<Integer> sortedA;
    private List<Integer> sortedB;

    public SortedArrayMerger(List<Integer> a, List<Integer> b) {
        this.sortedA = a;
        this.sortedB = b;
    }

    /**
     * Given Two Sorted integer Arrays A and B, merge B into A as one sorted Array
     *
     * Assume that A have enough space to hold additional elements from B
     */
    public void merge(){
        if(sortedA.get(sortedA.size()-1)<=sortedB.get(0)) { //sortB all greater than sortedA
            sortedA.addAll(sortedB);
            return;
        }
        if(sortedA.get(0)>sortedB.get(sortedB.size()-1)){
            sortedA.addAll(0,sortedB);
            return;
        }


    }

    public static void main(String[] args) {
        List<Integer> a = Lists.newArrayList(1,2,34);
        a.add(0,3);
        System.out.println(a);
    }
}
