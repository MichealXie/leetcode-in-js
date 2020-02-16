/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let smaller = new ListNode(null)
  const dummySmaller = smaller
  let greater = new ListNode(null)
  const dummyGreater = greater

  while (head) {
    if (head.val >= x) {
      greater.next = head
      greater = greater.next
    } else {
      smaller.next = head
      smaller = smaller.next
    }

    head = head.next
  }
  smaller.next = dummyGreater.next
  // 别忘了断开最后的节点
  greater.next = null

  // linkListToList(dummySmaller.next)
  return dummySmaller.next
};
// @lc code=end

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function linkListToList(head) {
  const arr = []
  while(head) {
    console.log(head.val)
    arr.push(head.val)
    head = head.next
  }
  return arr
}
function listToLinkList(arr) {
  let head = new ListNode(null)
  const dummyHead = head
  for(let num of arr) {
    head.next = new ListNode(num)
    head = head.next
  }
  return dummyHead.next
}

partition(
  listToLinkList([1]), 3
)