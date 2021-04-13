// 没验证, 应该是对的
function findPath(root, target) {
  function dfs(node): false | any[] {
    if (!node) return false

    if (node.val === target) {
      return [node]
    }

    const leftRes = dfs(node.left)
    const rightRes = dfs(node.right)
    
    if (leftRes) {
      leftRes.unshift(node)
      return leftRes
    }
    if (rightRes) {
      rightRes.unshift(node)
      return rightRes
    }

    return false
  }

  return dfs(root)
}
