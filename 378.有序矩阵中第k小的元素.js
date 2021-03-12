/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const heap = [,]
  let toReachK = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      toReachK++
      if (toReachK <= k) {
        heap.push(matrix[i][j])
      } else {
        if (matrix[i][j] < heap[1]) {
          heap[1] = matrix[i][j]
          heapify(heap, k, 1)
        }
      }

      if (toReachK === k) {
        // console.log(heap)
        buildHeap(heap, k)
        // console.log(heap)
      }
    }
  }
  // console.log(heap)

  return heap[1]

  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  function buildHeap(heap, heapSize) {
    for (let i = Math.floor(heapSize / 2); i > 0; i--) {
      heapify(heap, heapSize, i)
    }
  }

  // 大顶堆
  function heapify(heap, heapSize, i) {
    let maxIndex = i
    while (true) {
      if (i * 2 <= heapSize && heap[i * 2] > heap[i]) {
        maxIndex = i * 2
      }
      if (i * 2 + 1 <= heapSize && heap[i * 2 + 1] > heap[maxIndex]) {
        maxIndex = i * 2 + 1
      }

      if (maxIndex === i) break
      swap(heap, i, maxIndex)
      i = maxIndex
    }
  }
}
// @lc code=end

console.log(
  kthSmallest(
    [
      [1, 8, 9],
      [3, 6, 13],
      [12, 3, 15],
    ],
    6
  )
)
