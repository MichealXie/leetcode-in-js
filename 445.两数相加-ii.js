/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
var addTwoNumbers = function(l1, l2) {
  function reverseListNode(node) {
     if (!node || !node.next) return node
     const last = reverseListNode(node.next)
     node.next.next = node
     node.next = null

     return last
  }

  l1 = reverseListNode(l1)
  l2 = reverseListNode(l2)
  let head = new ListNode(0)
  const dummyHead = head 

  let needAddOne = false
  while(l1 || l2) {
    if (!l1) {
      l1 = new ListNode(0)
    }
    if (!l2) {
      l2 = new ListNode(0)
    }
    let val = l1.val + l2.val
    if (needAddOne) {
      needAddOne = false
      val += 1
    }
    if (val >= 10) {
      val -= 10
      needAddOne = true
    }

    head.next = new ListNode(val)

    l1 = l1.next
    l2 = l2.next
    head = head.next
  }

  // 很容易忘...
  // [5], [5] 这种
  if (needAddOne) {
    head.next = new ListNode(1)
  }

  return reverseListNode(dummyHead.val ? dummyHead : dummyHead.next)
};
// @lc code=end

