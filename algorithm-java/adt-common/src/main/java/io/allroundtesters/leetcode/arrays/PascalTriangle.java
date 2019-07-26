package io.allroundtesters.leetcode.arrays;

import com.google.common.collect.Lists;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by patrick on 16/3/13.
 */
public class PascalTriangle {
    private  long n;
    private List<List<Long>> pascalTriangle;

    public PascalTriangle(int n) {
        this.n = n;
        pascalTriangle = new ArrayList<List<Long>>();
    }

    /**
     * Level K has K element
     * First and Last Element is 1 in every level
     * A[K][n] = A[k-1][n-1]+A[k-1][n]
     * [
     * [1]
     * [1, 1]
     * [1, 2, 1]
     * [1, 3, 3, 1]
     * [1, 4, 6, 4, 1]
     * [1, 5, 10, 10, 5, 1]
     * [1, 6, 15, 20, 15, 6, 1]
     * [1, 7, 21, 35, 35, 21, 7, 1]
     * [1, 8, 28, 56, 70, 56, 28, 8, 1]
     * ]
     */
    public void generatePascalTriangle() {
        if (n == 0) throw new RuntimeException("N should be more than zero");
        for (int i = 0; i < n; i++) {
            List<Long> levelI = Lists.newArrayList();
            if (i == 0) {
                levelI.add(1L);
            } else {
                levelI.add(1L); //for fist
                List<Long> levelBefore = pascalTriangle.get(i - 1);
                for (int j = 0; j < levelBefore.size() - 1; j++) {
                    levelI.add(levelBefore.get(j) + levelBefore.get(j + 1));
                }
                levelI.add(1L); //add last;
            }
            pascalTriangle.add(levelI);

        }
    }

    /**
     * get K level value of a Pascal Triangle
     *
     * @param level
     * @return
     */
    public List<Long> getGivenLevel(int level) {
        this.n = level;
        generatePascalTriangle();
        return pascalTriangle.get(pascalTriangle.size()-1);
    }

    @Override
    public String toString() {
        if (pascalTriangle == null) return "";
        StringBuilder sb = new StringBuilder();
        sb.append("[\n");
        for (List item : pascalTriangle) {
            sb.append(item).append("\n");
        }
        sb.append("]");
        return sb.toString();
    }

    /**
     * give a large number, some issues
     * @param args
     */
    public static void main(String[] args) {
        PascalTriangle t = new PascalTriangle(68);
        t.generatePascalTriangle();
        System.out.println(t);
    }
}
