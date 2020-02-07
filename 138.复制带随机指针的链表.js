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
var copyRandomList = function(head) {
    const map = {}
    let cur = head
    while(cur) {
      map[cur] = {
        val: cur.val,
      }
      cur = cur.next
      console.log(map[cur])
    }

    cur = head

    while (cur) {
      map[cur].next = cur.next
      map[cur].random= cur.random
      cur = cur.next
    }
  return map[head]
};
