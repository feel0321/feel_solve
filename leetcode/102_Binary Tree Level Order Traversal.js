/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const values = [];
  check(root, 0, values);
  return values;
};

function check(tree, floor, values) {
  if (!values[floor]) {
    values.push([]);
  }
  values[floor].push(tree.val);
  if (tree.left) {
    check(tree.left, floor + 1, values);
  }
  if (tree.right) {
    check(tree.right, floor + 1, values);
  }
}
