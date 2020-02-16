/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  // 迭代
  // let next = null
  // let prev = null
  // let cur = head

  // while(cur) {
  //   next = cur.next // 保存下一个
  //   cur.next = prev
  //   prev = cur
  //   cur = next // 这里就是迭代!
  // }

  // return prev

  // 递归
  if (!head || !head.next) return head
  const last = reverseList(head.next)
  head.next.next = head
  head.next = null
  console.log(last)
  return last
};
// @lc code=end

reverseList(
  listToLinkList([1, 1, 3, 4])
)
function listToLinkList(arr) {
  let head = {}
  const dummyHead = head
  for (let num of arr) {
    head.val = num
    head.next = {}
    head = head.next
  }
  return dummyHead
}