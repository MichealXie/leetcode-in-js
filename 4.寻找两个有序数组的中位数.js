/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 作弊哈哈
  // let arr = nums1.concat(nums2).sort((a, b) => (a - b))
  // function getMiddle(arr) {
  //   if (arr.length % 2 === 0) {
  //     return (arr[Math.floor(arr.length/2) - 1] + arr[Math.ceil(arr.length/2)]) /2
  //   } else {
  //     return arr[(arr.length - 1)/2]
  //   }
  // }
  // return getMiddle(arr)

  // 求第 K 大的做法
  const k = nums1.length + nums2.length

  if (k % 2 === 0) {
    return (findKth(Math.floor(k / 2), nums1, 0, nums2, 0) + findKth(Math.floor(k / 2) + 1, nums1,0, nums2, 0)) / 2
  } else {
    return findKth(Math.floor(k / 2) + 1, nums1, 0, nums2, 0)
  }

  function findKth(k, nums1, key1, nums2, key2) {
    if (k === 1) {
      // 二分切割到只有一个时, 最小那个就是第 k 大
      if (nums1[key1] === undefined) return nums2[key2]
      if (nums2[key2] === undefined) return nums1[key1]
      return Math.min(nums1[key1], nums2[key2])
    }

    // 一个空了那么直接取另一个数组的 k 大
    if (key1 >= nums1.length) {
      return nums2[key2 + k - 1]
    }
    if (key2 >= nums2.length) {
      return nums1[key1 + k - 1]
    }

    let mid1 = key1 + Math.floor(k / 2)
    let mid2 = key2 + Math.floor(k / 2)

    // 一长一短的情况, 肯定是长的切, 直接让短的无限大
    if (nums1[mid1 - 1] === undefined) nums1[mid1 - 1] = Infinity
    if (nums2[mid2 - 1] === undefined) nums2[mid2 - 1] = Infinity

    if (nums1[mid1 - 1] > nums2[mid2 - 1]) {
      // 舍去 nums2 的左边, 他们一定比第 k 大小
      return findKth(k - Math.floor(k / 2), nums1, key1, nums2, key2 + Math.floor(k / 2))
    } else {
      return findKth(k - Math.floor(k / 2), nums1, key1 + Math.floor(k / 2), nums2, key2)
    }

    // 一直删除, 两数组直到只剩第一个
  }
}