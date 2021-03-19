/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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

var swapPairs = function(head) {
  // 递归
  // 1. 终止: 当没有节点, 或只有一个节点的时候终止
  if (!head || !head.next) {
    return head
  }
  let next = head.next
  let nextNext = head.next.next

  // 3. 操作: 交换节点
  head.next = swapPairs(nextNext)
  next.next = head
  
  // 2. 返回: 上次递归需要链接的 node
  return next
}
// @lc code=end
// swapPairs(null)
