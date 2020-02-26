/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  // 深度优先
  // function dfs(node, map) {
  //   if (!node) return node
  //   if (map.get(node)) return map.get(node)

  //   const copied = new Node(node.val, [])
  //   map.set(node, copied)
  //   copied.neighbors = node.neighbors.map(n => dfs(n, map))
  //   return copied
  // }

  // const map = new Map()
  // return dfs(node, map)

  // 广度优先
  if (!node) return node
  if (!node.neighbors.length) return new Node(node.val, [])

  const queue = [node]
  const queue2 = []
  const map = new Map()

  while (queue.length) {
    const n = queue.pop()
    // 注意判断时不是 if (map.get(n)) return xxx
    // 而是没有就push neighbors
    if (!map.get(n)) {
      queue2.push(n)
      if (n && n.neighbors &&n.neighbors.length) queue.push(...n.neighbors)
      const copied = new Node(n.val, [])
      map.set(n, copied)
    }
  }

  while (queue2.length) {
    const cur = queue2.pop()
    const copied = map.get(cur)
    copied.neighbors = cur.neighbors.map(n => map.get(n))
  }

  return map.get(node)
};
// @lc code=end

