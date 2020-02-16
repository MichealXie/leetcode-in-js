/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
  return tear(head)
};
function tear(head) {
  if (!head || !head.next) {
    return head
  } 
  // 快慢指针找到中点
  let fast = head
  let slow = head
  let prev = null
  while (fast && fast.next) {
    prev = slow
    fast = fast.next.next
    slow = slow.next
  }

  prev.next = null
  return merge(tear(head), tear(slow))
}
function merge(left, right) {
  let dummy = new ListNode(null)
  const dummyHead = dummy
  while (left || right) {
    if (!left) {
      dummy.next = right
      right = right.next
    } else if (!right) {
      dummy.next = left
      left = left.next
    } else if (left.val > right.val) {
      dummy.next = right
      right = right.next
    } else {
      dummy.next = left
      left = left.next
    }

    dummy = dummy.next
  }
  
  return dummyHead.next
}
// @lc code=end

