let start = 0
let end = nums.length - 1
let mid

while (start < (end - 1)) {
  mid = Math.round((start + end) / 2)

  if (nums[mid] === target) {
    return mid
  // 先区分是在断点左还是右
  } else if (nums[mid] > nums[start]) {
    // 再判断是否在线性区间
    // 线性区间也能搜索, 因为二分的核心是缩小范围
    // 非线性区间则类似递归处理
    if (target >= nums[start] && nums[mid] >= target) {
      // 这里两个等于是为了处理不麻烦, 两个不好拆出来
      end = mid
    }else {
      start = mid
    }
  } else {
    if (target <= nums[end] && nums[mid] <= target) {
      start = mid
    }else {
      end = mid
    }
  }
}

if (target === nums[start]) {
  return start
} else if (target === nums[end]) {
  return end
}

return -1
