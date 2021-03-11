/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */
// @lc code=start
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
class MyCircularDeque {
  constructor(k) {
    // 多一个单位是为了防止 head === tail 的情况
    // 这时删除 head 会导致 tail 为 undefined
    this.maxSize = k + 1
    this.quequ = Array(k + 1)
    this.head = 0
    this.tail = 0
    this.size = 0
  }
  /**
   * Adds an item at the front of Deque. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  insertFront(value) {
    // 把 head 当做特殊处理, 优先级低于 tail
    // 先移动, 再赋值
    if (this.isFull()) return false

    this.head = (this.head - 1 + this.maxSize) % this.maxSize
    this.size++
    this.quequ[this.head] = value

    return true
  }
  /**
   * Adds an item at the rear of Deque. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  insertLast(value) {
    // 把 tail 当做正常的循环队列看待
    // 那么就是先插入, 再移动
    if (this.isFull()) return false

    this.quequ[this.tail] = value
    this.size++
    this.tail = (this.tail + 1) % this.maxSize

    return true
  }
  /**
   * Deletes an item from the front of Deque. Return true if the operation is successful.
   * @return {boolean}
   */
  deleteFront() {
    if (this.isEmpty()) return false

    delete this.quequ[this.head]
    this.head = (this.head + 1) % this.maxSize
    this.size--
    return true
  }
  /**
   * Deletes an item from the rear of Deque. Return true if the operation is successful.
   * @return {boolean}
   */
  deleteLast() {
    if (this.isEmpty()) return false

    this.tail = (this.tail - 1 + this.maxSize) % this.maxSize
    this.size--
    delete this.quequ[this.tail]
    return true
  }
  /**
   * Get the front item from the deque.
   * @return {number}
   */
  getFront() {
    if (this.isEmpty()) return -1
    return this.quequ[this.head]
  }
  /**
   * Get the last item from the deque.
   * @return {number}
   */
  getRear() {
    if (this.isEmpty()) return -1
    return this.quequ[(this.tail - 1 + this.maxSize) % this.maxSize]
  }
  /**
   * Checks whether the circular deque is empty or not.
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0
  }
  /**
   * Checks whether the circular deque is full or not.
   * @return {boolean}
   */
  isFull() {
    return this.size === this.maxSize - 1
  }
}









/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end


const q = new MyCircularDeque(4)
// console.log(
//   q.insertFront(9),
//   q.getRear(),
//   q.insertFront(9),
//   q.getRear(),
//   q.insertLast(5),
//   q.getFront(),
//   q.getRear(),
//   q.getFront(),
//   q.insertLast(8),
//   q.deleteLast(),
//   q.getFront(),
//   )
// console.log(
// q.insertLast(1),
// q.insertLast(2),
// q.insertFront(3),
// q.insertFront(4),
// q.getRear(),
// q.isFull(),
// q.deleteLast(),
// q.insertFront(4),
// q.getFront(),
// )

console.log(
  q.insertFront(9),
  q.deleteLast(),
  q.getRear(),
  q.getFront(),
  q.getFront(),
  q.deleteFront(),
  q.insertFront(6),
  q.insertLast(5),
  q.insertFront(9),
  q.getFront(),
  q.insertFront(6)
)