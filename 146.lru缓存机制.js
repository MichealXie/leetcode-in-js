/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.maxCapacity = capacity
    this.capacity = 0
    this.map = new Map()
  }
  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    let val = this.map.get(key)
    if (val === undefined) return -1

    this.map.delete(key)
    this.map.set(key, val)

    return val
  }
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (!this.map.has(key)) {
      this.capacity += 1
    } else {
      this.map.delete(key)
    }

    // map.set 是按顺序记录的, 有迭代器
    // 普通对象不是
    this.map.set(key, value)

    if (this.capacity > this.maxCapacity) {
      this.capacity = this.maxCapacity
      this.map.delete(this.map.keys().next().value)
    }
  }
}



/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

