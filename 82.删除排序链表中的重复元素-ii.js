/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
  if (!head || !head.next) return head

  let dummyHead = {
    val: null,
    next:head
  }
  head = dummyHead
  let lastNode = head
  const duplicatesMap = {}

  while(head) {
    if (head.next && head.val === head.next.val) {
      duplicatesMap[head.val] = true
    }

    if (duplicatesMap[head.val]) {
      lastNode.next = head.next
    } else {
      lastNode = head
    }
    head = head.next
  }

  // 假如没构造一个 dummyHead 的话
  // 需要特殊处理一下head, 因为 while 里面对最开始的元素没过滤
  // if (duplicatesMap[dummyHead.val]) {
  //   dummyHead = dummyHead.next
  // }

  // console.log(dummyHead.next)
  return dummyHead.next
};
// @lc code=end

deleteDuplicates(
  listToLinkList([1,1,2,3,3,3])
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