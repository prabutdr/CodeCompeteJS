/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (root == null) {
    return 0;
  }

  const lh = height(root.left);
  const rh = height(root.right);

  const ldiameter = diameterOfBinaryTree(root.left);
  const rdiameter = diameterOfBinaryTree(root.right);

  return Math.max(lh + rh, Math.max(ldiameter, rdiameter));
};

var height = function (root) {
  if (root == null) {
    return 0;
  }

  return 1 + Math.max(height(root.left), height(root.right));
};
