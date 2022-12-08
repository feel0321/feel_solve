/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 1
var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
};

// 2
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode(-101);
  let node = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      node.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    node = node.next;
  }
  node.next = list1 || list2;

  return head.next;
};
