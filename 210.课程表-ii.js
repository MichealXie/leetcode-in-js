/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const result = []

  const map = {}
  const indegrees = Array(numCourses).fill(0)
  for (let [cur, pre] of prerequisites) {
    indegrees[cur]++
    if (!map[pre]) map[pre] = []
    // 先处理前置条件可以减少多少当前课程的前置需求量
    map[pre].push(cur)
  }
  // console.log(map)
  // console.log(indegrees)

  const queue = []
  indegrees.forEach((v, i) => {
    if (v === 0) {
      queue.push(i)
    }
  })

  if (!queue.length) return []

  while (queue.length) {
    const node = queue.pop()
    result.push(node)
    numCourses--

    if (map[node] && map[node].length) {
      map[node].forEach(index => {
        if (indegrees[index] > 0) {
          indegrees[index]--
          if (indegrees[index] === 0) {
            queue.push(index)
          }
        }
      })
    }
  }

  if (numCourses < 0) return []
  if (indegrees.some(i => i !== 0)) return []

  return result
};
// @lc code=end


console.log(
findOrder(2,
  [[0,1],[1,0]]
  )

)