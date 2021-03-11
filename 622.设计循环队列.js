/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */
// @lc code=start
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
class MyCircularQueue {
  constructor(k) {
    this.maxSize = k
    this.queue = Array(k)
    this.head = -1 // index
    this.tail = -1
    this.size = 0
  }
  /**
   * Insert an element into the circular queue. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) return false
    if (this.tail === -1 && this.head === -1) this.head++

    this.tail = (this.tail + 1) % this.maxSize
    this.size++
    this.queue[this.tail] = value
    return true
  }
  /**
   * Delete an element from the circular queue. Return true if the operation is successful.
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) return false
    delete this.queue[this.head]
    this.head = (this.head + 1) % this.maxSize
    this.size--
    return true
  }
  /**
   * Get the front item from the queue.
   * @return {number}
   */
  Front() {
    if (!this.size) return -1
    return this.queue[this.head]
  }
  /**
   * Get the last item from the queue.
   * @return {number}
   */
  Rear() {
    if (!this.size) return -1
    return this.queue[this.tail]
  }
  /**
   * Checks whether the circular queue is empty or not.
   * @return {boolean}
   */
  isEmpty() {
    return !this.size
  }
  /**
   * Checks whether the circular queue is full or not.
   * @return {boolean}
   */
  isFull() {
    return this.size === this.maxSize
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

let circularQueue = new MyCircularQueue(3) // 设置长度为 3

console.log(
  circularQueue.enQueue(1), // 返回 true

  circularQueue.enQueue(2), // 返回 true

  circularQueue.enQueue(3), // 返回 true

  circularQueue.enQueue(4), // 返回 false，队列已满

  circularQueue.Rear(), // 返回 3

  circularQueue.isFull(), // 返回 true

  circularQueue.deQueue(), // 返回 true

  circularQueue.enQueue(4), // 返回 true

  circularQueue.Rear() // 返回 4
)
