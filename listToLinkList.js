function ListNode(val) {
    this.val = val;
    this.next = null;
}

function listToLinkList(arr) {
  let head = new ListNode(null)
  const dummyHead = head
  for(let num of arr) {
    head.next = new ListNode(num)
    head = head.next
  }
  return dummyHead.next
}

function linkListToList(head) {
  const arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  console.log(arr)
  return arr
}
listToLinkList([1,3,4])