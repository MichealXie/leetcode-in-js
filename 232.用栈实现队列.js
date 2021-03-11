/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */
// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    this.queue = []
  }
  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.queue.push(x)
  }
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    return this.queue.shift()
  }
  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    return this.queue[0]
  }
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.queue.length === 0
  }
}

// const m = new MyQueue()
// m.push(1)
// m.push(2)
// m.peek()
// m.pop()
// m.empty()
// console.log('m.empty(): ', m.empty());




/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

