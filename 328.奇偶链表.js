/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  // [1,2,3] 是最短的需要操作的长度
  if (!head || !head.next || !head.next.next) return head

  let odd = head
  let even = head.next
  let dummyEven = even

  // 为什么是 even && even.next?
  // [1,2,3] 是最短的需要操作的长度
  // 那么 2 有没有 next 就是条件
  while(even && even.next) {
    odd.next = even.next
    odd = odd.next

    even.next = odd.next
    even = even.next
  }
  odd.next = dummyEven


  return head
};
// @lc code=end

