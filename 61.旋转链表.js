/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  // 用 map 记录并找到对应节点后, 直接拆掉
  // !head.next 很重要, 很多测试里带着奇奇怪怪的参数 比如 [1], 99
  // if (!head || !head.next || k === 0) return head
  // const map = new Map()
  // const dummyHead = head
  // let n = 0

  // while(head) {
  //   n++
  //   map.set(n, head)
  //   head = head.next
  // }
  // map.get(n).next = dummyHead

  // k = k % n

  // const returnNode = map.get(n - k).next
  // map.get(n - k).next = null
  // return returnNode 

  // 快慢指针
  if (!head || !head.next || k < 1) return head

  let fast = head
  let slow = head

  for(let i = 0; i < k; i++) {
    if (fast.next) {
      fast = fast.next
    } else {
      // 这一步很关键
      fast = head
    }
  }

  // 当快慢一致时, 说明回到了起点, 不需要旋转
  if (fast === slow) return head
  while(fast.next) {
    fast = fast.next
    slow = slow.next
  }

  const returnNode = slow.next
  fast.next = head
  slow.next = null

  return returnNode
};
// @lc code=end

