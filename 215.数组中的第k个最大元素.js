/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  function buildHeap(arr, heapSize) {
    if (heapSize === 1) return 
    for(let i = Math.floor(heapSize / 2); i >= 1; i--) {
      heapify(arr, heapSize, i)
    }
  }

  // 自顶向下
  function heapify(arr, heapSize, i) {
    let minIndex = i
    while(true) {
      if (i * 2 <= heapSize && arr[i * 2] < arr[i]) {
        minIndex = i * 2
      }
      // arr[minIndex] 很重要, 上面是 arr[i], 这样对比一定能拿到最小的一个
      if ((i * 2 + 1) <= heapSize && arr[i * 2 + 1] < arr[minIndex]) {
        minIndex = i * 2 + 1
      }

      if (minIndex === i) break
      swap(arr, i, minIndex)
      i = minIndex
    }
  }

  const minHeap = [,]

  for(let i = 0; i < k;i++) {
    minHeap.push(nums[i])
  }
  buildHeap(minHeap, k)

  for(let i = k; i < nums.length; i++) {
    if (minHeap[1] < nums[i]) {
      minHeap[1] = nums[i]
      heapify(minHeap, k, 1)
    }
  }

  return minHeap[1]
};
// @lc code=end

// findKthLargest([3,2,1,5,6,4], 2)
findKthLargest( [3,2,3,1,2,4,5,5,6], 4)