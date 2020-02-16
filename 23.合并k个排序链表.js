/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function getMinIndex(lists) {
  const arr = lists.map(node => {
    if (node && typeof node.val === 'number') {
      return node.val
    } else {
      return Infinity
    }
  })
  let minIndex = 0
  for(let i = 0;i <arr.length;i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i
    }
  }
  return minIndex
  // return arr.indexOf(Math.min(...arr))
}

var mergeKLists = function (lists) {
  if (!lists.length) return null

  let head = new ListNode(null)
  const dummyHead = head
  while (lists.some(node => node)) {
    const index = getMinIndex(lists)
    head.next = lists[index]
    lists[index] = lists[index].next
    head = head.next
  }

  // linkListToList(dummyHead.next)
  return dummyHead.next
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
mergeKLists(
  [
    listToLinkList([1]),
    listToLinkList([0]),
    // listToLinkList([1, 3, 4]),
    // listToLinkList([2, 6]),
  ]
)