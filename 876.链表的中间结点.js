/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    // fast 可能为最后一个节点 || null
    fast = fast.next.next
    slow = slow.next
  }

  return slow
};
// @lc code=end

