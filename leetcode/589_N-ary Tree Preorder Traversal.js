/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];

  const visited = [];
  dfs(root, visited);
  return visited;
};

function dfs(tree, visited) {
  visited.push(tree.val);
  if (tree.children.length) {
    for (const child of tree.children) {
      dfs(child, visited);
    }
  }
}
