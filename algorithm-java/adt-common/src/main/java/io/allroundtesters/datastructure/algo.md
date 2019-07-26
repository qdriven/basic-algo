# Kadane's Algorithm

Kadane's Algorithm is an O(n) algorithm for finding the maximum contiguous subsequence 
in a one-dimensional sequence.

The algorithm keeps track of the tentative maximum subsequence in 
(maxSum, maxStartIndex, maxEndIndex). It accumulates a partial sum 
in currentMaxSum and updates the optimal range when this partial sum becomes larger than maxSum.


```
Kadane's Algorithm(array[1..n])
begin
    (maxSum, maxStartIndex, maxEndIndex) := (-INFINITY, 0, 0)
    currentMaxSum := 0
    currentStartIndex := 1
    for currentEndIndex := 1 to n do
        currentMaxSum := currentMaxSum + array[currentEndIndex]
        if currentMaxSum > maxSum then
            (maxSum, maxStartIndex, maxEndIndex) := (currentMaxSum, currentStartIndex, currentEndIndex)
        endif

        if currentMaxSum < 0 then
            currentMaxSum := 0
            currentStartIndex := currentEndIndex + 1
        endif
    endfor

    return (maxSum, maxStartIndex, maxEndIndex)
end


```


