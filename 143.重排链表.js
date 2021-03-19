/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function reverseListNode(node) {
  if (!node || !node.next) return node

  let prev = null
  while(node) {
    const tempNext = node.next
    node.next = prev
    prev = node

    node = tempNext
  }

  return prev
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return

  let slow = head
  let fast = head
  let prev = null

  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }

  prev.next = null
  let left = head
  let right = reverseListNode(slow)

  // left right 的长度差距最大只有1, 因为长度要么奇数要么偶数
  while(left && right) {
    const tempLeftNext = left.next
    left.next = right
    left = tempLeftNext

    const tempRightNext = right.next
    right.next = tempLeftNext
    right = tempRightNext
  }

  if (!left && right) {
    while(head.next) {
      head = head.next
    }
    head.next = right
  }
};
// @lc code=end

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function listToLinkList(arr) {
  let head = new ListNode(null)
  const dummyHead = head
  for (let num of arr) {
    head.next = new ListNode(num)
    head = head.next
  }
  console.log(dummyHead.next)
  return dummyHead.next
}

function linkListToList(head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  console.log(arr)
  return arr
}
reorderList(
  listToLinkList([1,2,3,4,5])
)