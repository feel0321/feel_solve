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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const min = Number.MIN_SAFE_INTEGER;
  const max = Number.MAX_SAFE_INTEGER;
  return recur(root, min, max);
};

function recur(tree, min, max) {
  if (!tree) {
    return true;
  }

  if (tree.val <= min || tree.val >= max) {
    return false;
  }

  return recur(tree.left, min, tree.val) && recur(tree.right, tree.val, max);
}
