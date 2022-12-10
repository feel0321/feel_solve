/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;

  const arr = [];
  while (head.next) {
    const node = arr.find(
      (node) => node.val == head.val && node.next == head.next
    );
    if (node) {
      return node;
    }

    arr.push(head);
    head = head.next;
  }
  return null;
};
