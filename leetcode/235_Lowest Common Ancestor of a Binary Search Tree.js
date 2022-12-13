/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    // 찾으려는 범위가 오른쪽이면 (둘 다 root보다 크면)
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    }
    // 찾으려는 범위가 왼쪽이면 (둘 다 root보다 작으면)
    else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    }
    // 찾으려는 범위면
    else {
      break;
    }
  }
  return root;
};
