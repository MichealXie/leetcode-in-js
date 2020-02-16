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
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reverseListNode(node) {
  if (!node || !node.next) return node

  const last = reverseListNode(node.next)
  node.next.next = node
  node.next = null

  return last
}

var reorderList = function (head) {
  if (!head || !head.next) return head

  let fast = head
  let slow = head
  let prev = null
  while (fast && fast.next) {
    prev = slow
    fast = fast.next.next
    slow = slow.next
  }

  let first = head
  let sec = reverseListNode(prev.next)
  slow.next = null

  linkListToList(sec)
  let isFirst = true
  let dummyNode = new ListNode(null)
  let node = new ListNode(null)
  dummyNode.next = node
  // 这个写法较为繁琐
  // 可以只判断 sec, 但是 slow 的指针要往后走一个
  // 不知道为什么, 感觉是错的..
  while (first && sec) {
    if (isFirst) {
      node.next = first
      first = first.next
    } else {
      node.next =sec 
      sec = sec.next
    }

    isFirst = !isFirst
    node = node.next
  }
  if (first) {
      node.next = first
      first = first.next
  }
  if (sec) {
      node.next =sec 
      sec = sec.next
  }
  // linkListToList(dummyNode.next.next)
  
  return dummyNode.next.next
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