/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */
// @lc code=start
/**
 * initialize your data structure here.
 */
class MedianFinder {
  constructor() {
    this.arr = []
  }
  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    const index = findIndex(this.arr, num)
    this.arr.splice(index, 0, num)
  }
  /**
   * @return {number}
   */
  findMedian() {
    if (this.arr.length % 2 === 0) {
      return (this.arr[Math.floor(this.arr.length / 2)] + this.arr[Math.floor(this.arr.length / 2) - 1]) / 2
    } else {
      return this.arr[Math.floor(this.arr.length / 2)]
    }
  }
}
function findIndex(nums, num) {
  let start = 0
  let end = nums.length
  let mid = Math.floor((start + end) / 2)

  while(start + 1 < end) {
    if (nums[mid] === num) return mid
    if (nums[mid] > num) {
      end = mid
    }
    if (nums[mid] < num) {
      start = mid
    }
  }
  if (nums[start] === num) return start
  if (nums[end] === num) return end 

  return 0
}



/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

