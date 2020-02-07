function name(isBad) {
  let start = 0
  let end = n
  let mid

  while(start < (end - 1)) {
    mid = Math.round((start + end) /2)
    if (isBad(mid)) {
      if (!isBad(mid - 1)) {
        return mid
      }
      end = mid
    } else {
      start = mid
    }
  }

  if (isBad(start)) {
    return start
  }

  if (isBad(end)) {
    return end 
  }
}