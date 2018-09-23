package io.hedwig.ds.card.array.quiz;

/**
 * @@author: patrick
 * Given a matrix of M x N elements (M rows, N columns), return all elements of
 * the matrix in diagonal order as shown in the below image.
 * If out of bottom border (row >= m) then row = m - 1; col += 2; change walk direction.
 * if out of right border (col >= n) then col = n - 1; row += 2; change walk direction.
 * if out of top border (row < 0) then row = 0; change walk direction.
 * if out of left border (col < 0) then col = 0; change walk direction.
 * Otherwise, just go along with the current direction.
 * Time complexity: O(m * n), m = number of rows, n = number of columns.
 * Space complexity: O(1).
 */
public class DiagonalTraverse {
  public int[] findDiagonalOrder(int[][] matrix) {
    int [][] direction = new int[][]{{-1,1},{1,-1}};
    int i=0; int j=0;
    int M = matrix.length;
    if(M==0)return  new int[]{};
    int N = matrix[0].length;
    int[] res = new int[N*M];
    int iter = 0;
    int dir = 0;
    int []direct = direction[dir];
    while(iter<N*M){
      res[iter++]=matrix[i][j];
      i+=direct[0];
      j+=direct[1];
      if(j>=N){
        j--;
        i+=2;
        direct = direction[(++dir)%2];
      }
      else if(i>=M){
        j+=2;
        --i;
        direct = direction[(++dir)%2];
      }
      else if(i<0){
        ++i;
        direct = direction[(++dir)%2];
      }
      else if(j<0){
        ++j;
        direct = direction[(++dir)%2];
      }
    }
    return res;
  }
}
