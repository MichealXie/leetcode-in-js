/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 双二分
var searchMatrix = function(matrix, target) {
    function findCol(matrix, target) {
      if (!matrix.length) {
        return -1
      }

      let start = 0
      let end = matrix.length -1
      let mid

      while (start + 1 < end) {
        mid = Math.round(start + (end - start) / 2)

        if (matrix[mid][0] === target) {
          return mid
        } else if (matrix[mid][0] > target) {
          end = mid
        } else {
          start = mid
        }
      }

      if (matrix[end][0] <= target) {
        return end
      }
      if (matrix[start][0] <= target) {
        return start
      }

      return -1
    }

    function findRow(nums, target) {
      if (!nums.length) {
        return false
      }

      let start = 0
      let end = nums.length -1
      let mid

      while (start + 1 < end) {
        mid = Math.round(start + (end - start) / 2)

        if (nums[mid] === target) {
          return true
        } else if (nums[mid] > target) {
          end = mid
        } else {
          start = mid
        }
      }

      if ((nums[start] === target) || (nums[end] === target)) {
        return true
      }

      return false
    }

    let col = findCol(matrix, target)

    if (col === -1) {
      return false
    }

    return findRow(matrix[col], target)
};


// 合并
// var searchMatrix = function(matrix, target) {
//   const nums = [].concat(...matrix)
//   let start = 0
//   let end = nums.length - 1
//   let mid

//   while (start + 1 < end) {
//     mid = Math.round(start + (end - start) / 2)

//     if (nums[mid] === target) {
//       return true
//     } else if (nums[mid] > target) {
//       end = mid
//     } else {
//       start = mid
//     }
//   }

//   if (nums[start] === target) {
//     return true
//   }
//   if (nums[end] === target) {
//     return true
//   }

//   return false
// };

// @lc code=end
console.log(
  searchMatrix(
    [[1], [3]],
    2
  )
)