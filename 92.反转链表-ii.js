/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseBetween = function (head, m, n) {
  // 自己想出来的
  function reverseListNode(node) {
    if (!node || !node.next) return node
    const last = reverseListNode(node.next)
    node.next.next = node
    node.next = null

    return last
  }

  if (m === n) return head
  let dummyHead = head
  let left = null
  while(m > 1) {
    if (m === 2) {
      left = head
    }
    head = head.next
    m--
    n--
  }
  let mid = head

  let right = null
  while(n !== 1) {
    head = head.next
    n--
  }

  right = head.next
  head.next = null

  mid = reverseListNode(mid)
  if (!left && !right) {
    return mid
  }
  if (!left) {
    dummyHead = mid
    while(mid.next) {
      mid = mid.next
    }
    mid.next = right

    return dummyHead
  }

  left.next = mid
  while(mid.next) {
    mid = mid.next
  }
  mid.next = right

  return dummyHead




  // console.log(head)
  // // 迭代
  // const dummyHead = new ListNode(null)
  // dummyHead.next = head
  // let temp = dummyHead
  // // 找到第 m - 1 节点
  // for (let i = 1; i < m;i++) {
  //   temp = dummyHead.next
  // }
  // console.log(temp)

  // let prev = null
  // let next = head.next
  // // 注意循环后到 n 的下一个值了
  // // prev 是 n
  // // head 是 n + 1
  // for(let i = 0;i <= n - m;i++) {
  //   next = head.next
  //   head.next = prev
  //   prev = head
  //   head = next
  // }
  // console.log(prev)
  // // 老是忘记接上...
  // temp.next.next = head // 2 接 5
  // temp.next = prev; // 1 接 4

  // console.log(dummyHead)
  // return dummyHead.next



  // 递归
  // 反转前 n 项, 无边界处理
  // let restLinkList = null
  // var reverseN = function (head, n) {
  //   if (n === 1) {
  //     restLinkList = head.next
  //     return head
  //   }
  //   const last = reverseN(head.next, n - 1)
  //   // 返回的是反转过后的 head
  //   // 连接的是原先的 head 与 n 之后的 node
  //   head.next.next = head
  //   head.next = restLinkList
  //   return last
  // }
  // if (m === 1) {
  //   return reverseN(head, n)
  // }

  // head.next = reverseBetween(head.next, m - 1, n - 1)
  // return head
};
// @lc code=end


reverseBetween(
  new ListNode(1), 1, 1
)
function listToLinkList(arr) {
  let head = {}
  const dummyHead = head
  for (let num of arr) {
    head.val = num
    head.next = {}
    head = head.next
  }
  head.next = null
  return dummyHead
}