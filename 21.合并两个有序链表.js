/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let finalDummy = new ListNode(null)
  const dummyHead = finalDummy
  while(l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        finalDummy.next = l1
        l1 = l1.next
      } else {
        finalDummy.next = l2
        l2 = l2.next
      }
    } else if (!l2) {
      finalDummy.next = l1
      l1 = l1.next
    } else if (!l1) {
      finalDummy.next = l2
      l2 = l2.next
    }

    finalDummy = finalDummy.next
  }

  return dummyHead.next
};
// @lc code=end

