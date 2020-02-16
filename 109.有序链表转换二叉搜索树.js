/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null
  if (!head.next) return new TreeNode(head.val)
  let fast = head
  let slow = head
  let prev

  while (fast && fast.next) {
    prev = slow
    fast = fast.next.next
    slow = slow.next
  }

  if (prev) prev.next = null

  const tree = new TreeNode(slow.val)

  tree.left = sortedListToBST(head)
  tree.right = sortedListToBST(slow.next)

  return tree
};
// @lc code=end

