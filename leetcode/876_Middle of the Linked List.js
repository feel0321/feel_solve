/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let node = head;
  let half = node;
  let idx = 1;

  while (node.next) {
    node = node.next;
    idx += 1;
    if (idx % 2 == 0) {
      half = half.next;
    }
  }

  return half;
};
