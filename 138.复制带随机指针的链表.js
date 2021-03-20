/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
// function copyHead(head) {
//   const dummyHead = head
//   while (head) {
//     const copied = new Node(head.val, head.next, null)
//     head.next = copied
//     head = head.next.next
//   }

//   head = dummyHead
// }
// function copyRandom(head) {
//   const dummyHead = head
//   while (head) {
//     const copied = head.next
//     copied.random = head.random ? head.random.next : null
//     head = head.next.next
//   }

//   head = dummyHead
// }
// function splitCopied(head) {
//   let origin = new Node(null, null, null)
//   let dummyOrigin = origin
//   let copied = new Node(null, null, null)
//   const dummyCopied = copied

//   let isOrign = true
//   while (head) {
//     if (isOrign) {
//       origin.next = head
//       origin = origin.next
//     } else {
//       copied.next = head
//       copied = copied.next
//     }

//     isOrign = !isOrign
//     head = head.next
//   }

//   head = dummyOrigin.next
//   return dummyCopied.next
// }
const map = new Map()
var copyRandomList = function (head) {
  // 这个做法是对的, sb leetcode 过不了
  // 提示 Next pointer of node with label 1 from the original list was modified.
  // copyHead(head)
  // copyRandom(head)
  // return splitCopied(head)

  // 用 map, 缺点是 两次迭代 + 1个额外空间
  // if (!head) return head
  // const map = new Map()
  // const dummyHead = head
  // while (head) {
  //   map.set(head, new Node(head.val, null, null))
  //   head = head.next
  // }
  // head = dummyHead

  // while (head) {
  //   map.get(head).next = head.next === null ? null: map.get(head.next)
  //   map.get(head).random = head.random === null ? null : map.get(head.random)
  //   head = head.next
  // }

  // return map.get(dummyHead)


  // 递归, 只占用一个额外空间
  if (!head) return head
  let node = map.get(head)
  if (node) {
    return node
  }
  node = new Node(head.val, null, null)
  map.set(head, node)
  node.next = copyRandomList(head.next)
  node.random = copyRandomList(head.random)

  return node
};

// @lc code=end
// function Node(val,next,random) {
//    this.val = val;
//    this.next = next;
//    this.random = random;
// };

// function listToLinkList(arr) {
//   let head = new Node(null, null, null)
//   const dummyHead = head
//   for(let [num, ran]of arr) {
//     head.next = new Node(num, null, ran)
//     head = head.next
//   }
//   return dummyHead.next
// }

// function linkListToList(head) {
//   const arr = []
//   while(head) {
//     arr.push({
//       val:head.val,
//       random:head.random,
//     })
//     head = head.next
//   }
//   console.log(arr)
//   return arr
// }
// copyRandomList(listToLinkList([[7,null],[13,0],[11,4],[10,2],[1,0]]))