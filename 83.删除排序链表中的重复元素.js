/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  const dummyHead = head
  let lastNode = head

  while(head) {
    if (lastNode.val === head.val) {
      lastNode.next = head.next
    } else {
      lastNode = head
    }
    head = head.next
  }

  console.log(dummyHead)
  return dummyHead
};
// @lc code=end

deleteDuplicates(
  listToLinkList([1,1,3,4])
)
function listToLinkList(arr) {
  let head = {}
  const dummyHead = head
  for(let num of arr) {
    head.val = num
    head.next = {}
    head = head.next
  }
  return dummyHead
}
