/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
  if (!head || !head.next) return null

  let fast = head
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) {
      break
    }
  }

  fast = head
  // 注意要考虑到fast & slow 为null的情况
  while (fast && slow) {
    // 注意顺序!
    if (fast === slow) {
      return slow
    }
    fast = fast.next
    slow = slow.next
  }

  return null
};
// @lc code=end

