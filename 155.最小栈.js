/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
// @lc code=start
/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.min = []
    this.stack = []
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x)
    
    // 同步
    // if (!this.min.length || x < this.getMin()) {
    //   this.min.push(x)
    // } else {
    //   this.min.push(this.getMin())
    // }
    // 不同步
    if (!this.min.length || x <= this.getMin()) {
      this.min.push(x)
    }
  }
  /**
   * @return {void}
   */
  pop() {
    if (!this.stack.length) return

    const n = this.stack.pop()
    // 同步
    // this.min.pop()
    // 不同步
    if (this.getMin() === n) {
      this.min.pop()
    }
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1]
  }
  /**
   * @return {number}
   */
  getMin() {
    return this.min[this.min.length - 1]
  }
}





/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


const m = new MinStack()
m.push(85)
m.push(-99)
m.push(67)
console.log(m.getMin())
m.top()
m.pop()
m.top()

console.log(m.getMin())
// const m = new MinStack()
// m.push(-2)
// m.push(0)
// m.push(-1)
// m.getMin()
// console.log(

// m.top()
// )
// m.pop()