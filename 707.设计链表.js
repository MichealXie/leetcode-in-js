/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */
// @lc code=start
/**
 * Initialize your data structure here.
 */
function LinkedNode(val) {
  return {
    val,
    next: null
  }
}
class MyLinkedList {
  constructor() {
    this.size = 0
    this.head = new LinkedNode(null)
  }
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1

    let head = this.head
    for(let i = 0;i < index + 1;i++) {
      head = head.next
    }
    return head.val
  }
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    this.addAtIndex(0, val)
  }
  /**
   * Append a node of value val to the last element of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    this.addAtIndex(this.size, val)
  }
  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index > this.size) return
    if (index < 0) index = 0

    const node = new LinkedNode(val)
    let head = this.head
    for(let i = 0; i < index;i++) {
      head = head.next
    }
    node.next = head.next
    head.next = node

    this.size++
  }
  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index >= this.size) return
    if (index < 0) return

    let head = this.head
    for(let i = 0; i < index;i++) {
      head = head.next
    }
    head.next = head.next ? head.next.next : null
    this.size--
  }
}






/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

