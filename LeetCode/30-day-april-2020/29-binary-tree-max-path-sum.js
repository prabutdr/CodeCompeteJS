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
 * @return {number}
 */
var maxPathSum = function (root) {
  const max = [Number.MIN_SAFE_INTEGER];
  calculateSum(root, max);
  return max[0];
};

var calculateSum = function (root, max) {
  if (root == null)
    return Number.MIN_SAFE_INTEGER;

  const left = calculateSum(root.left, max);
  const right = calculateSum(root.right, max);

  const current = Math.max(root.val, root.val + left, root.val + right);

  max[0] = Math.max(max[0], current, left + root.val + right);

  return current;
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(root));