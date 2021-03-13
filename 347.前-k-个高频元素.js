/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const frequencyMap = {
    Infinity: -Infinity
  }
  for(let i = 0; i < nums.length;i++) {
    if (frequencyMap[nums[i]] === undefined) {
      frequencyMap[nums[i]] = 0
    }
    frequencyMap[nums[i]] += 1 
  }

  const heap = [,]
  for(let i = 0;i < k;i++) {
    if (!heap.includes(nums[i])) {
      heap.push(nums[i])
    } else {
      heap.push(Infinity)
    }
  }
  buildHeap(heap, k)
  // console.log(heap)
  for(let i = k; i < nums.length; i++) {
    if (frequencyMap[nums[i]] > frequencyMap[heap[1]] && !heap.includes(nums[i])) {
      heap[1] = nums[i]
      adjustHeap(heap, k, 1)
    }
  }

  function buildHeap(heap, k) {
    for(let i = Math.floor(k / 2); i > 0; i--) {
      adjustHeap(heap, k, i)
    }
  }
  // 最小堆
  function adjustHeap(heap, heapSize, i) {
    let minIndex = i
    while(true) {
      if (i * 2 <= heapSize && frequencyMap[heap[i * 2]] < frequencyMap[heap[i]]) {
        minIndex = i * 2
      }
      if (i * 2 + 1 <= heapSize && frequencyMap[heap[i * 2 + 1]] < frequencyMap[heap[minIndex]]) {
        minIndex = i * 2 + 1
      }
      if (minIndex === i) break
      swap(heap, minIndex, i)
      i = minIndex
    }
  }

  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  // console.log(heap.slice(1))
  return heap.slice(1)
};
// @lc code=end


topKFrequent([1,1,1,2,2,3], 2)
topKFrequent([1], 1)
topKFrequent([3, 0, 1, 0], 1)