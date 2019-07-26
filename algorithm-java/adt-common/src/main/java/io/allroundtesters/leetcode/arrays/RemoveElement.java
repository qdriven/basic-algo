package io.allroundtesters.leetcode.arrays;


/**
 * Created by patrick on 16/3/13.
 */


public class RemoveElement {
    /**
     * Question:
     * Given an array and a value,remove all instance of that > value in place
     * and return the new length
     * The order of elements can be changed ,it doesn't matter what you leave beyond the new
     * length
     */
    public static int getLength(int[] source, int refValue) {
        int newLength = 0;
        for (int i = 0; i < source.length; i++) {
            if (source[i] > refValue) continue;
            source[newLength] = source[i];
            newLength++;
        }
        return newLength;
    }

    /**
     * remove duplicated item in a sorted list, return the
     * new length,and don't allocate another array space
     *
     * @param sortedList
     */
    public static int removeDup(int[] sortedList) {
        int currentIndex = 0;
        if (sortedList.length == 0) return 0;
        for (int i = 1; i < sortedList.length; i++) {
            if (sortedList[currentIndex] != sortedList[i]) {
                sortedList[++currentIndex] = sortedList[i];
            }
        }

        return currentIndex + 1;
    }

    /**
     * what about the duplicated element allowed twice
     */
    public static int removeMoreThanNDup(int[] sortedList, int n) {
        int currentIndex = 0;
        if (sortedList.length == 0) return 0;
        int num = 0;
        for (int i = 1; i < sortedList.length; i++) {
            if (sortedList[currentIndex] == sortedList[i]) {
                num++;
                if (num < n) {
                    sortedList[++currentIndex] = sortedList[i];

                }
            } else {
                sortedList[++currentIndex] = sortedList[i];
                num = 0;

            }
        }
        return currentIndex + 1;
    }

    public static void main(String[] args) {
        int[] source = new int[]{11, 2, 10, 6, 5, 6, 7, 8};
        System.out.println(getLength(source, 5));
        int[] sortedList = new int[]{1, 2, 2, 3, 3, 3, 4, 4, 4, 5};
        int[] sortedList2 = new int[]{1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5};
        System.out.println(removeDup(sortedList));
        System.out.println(removeMoreThanNDup(sortedList2, 2));
        System.out.println(sortedList2);
    }
}
