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
var reverseList = function (head) {
  if (!head) return null;

  let start = head;
  let answer = new ListNode(start.val);
  while (start.next) {
    const temp = new ListNode(start.next.val, answer);
    answer = temp;
    start = start.next;
  }
  return answer;
};
