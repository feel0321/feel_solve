/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const arr1 = toArray(l1);
  const arr2 = toArray(l2);
  let newArr = Array(Math.max(arr1.length, arr2.length)).fill(0);

  let prevTemp = 0;
  let nextTemp = 0;
  newArr = newArr.map((_, i) => {
    prevTemp = nextTemp;
    let currentValue = (arr1[i] || 0) + (arr2[i] || 0) + prevTemp;

    if (currentValue >= 10) {
      currentValue -= 10;
      nextTemp = 1;
    } else {
      nextTemp = 0;
    }
    return currentValue;
  });

  if (nextTemp) {
    newArr.push(1);
  }

  newArr.reverse();
  const startNode = new ListNode(newArr.pop());
  let currentNode = startNode;

  while (newArr.length) {
    const nextValue = newArr.pop();
    currentNode.next = new ListNode(nextValue);
    currentNode = currentNode.next;
  }
  return startNode;
};

function toArray(node) {
  const arr = [];

  while (node && node.next !== undefined) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}
