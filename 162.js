function peak(nums) {
  let start = 0
  let end = nums.length - 1
  let mid

  while(start < (end - 1)) {
    mid = Math.round((start + end) / 2)
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid
    } else if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) {
      start = mid
    } else {
      end = mid
    }
  }

  if (nums[start] > nums[start + 1]) {
    return start
  }
  if (nums[end] > nums[end - 1]) {
    return end 
  }
}