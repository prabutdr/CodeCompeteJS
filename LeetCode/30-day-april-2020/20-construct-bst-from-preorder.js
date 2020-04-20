/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  const bstFromPreorderRec = function(preorder, start, end) {
    if (start === end) return new TreeNode(preorder[start]);

    const node = new TreeNode(preorder[start]);
    const pi = findPivotIndex(preorder, start, end);
    if (start + 1 < pi)
      node.left = bstFromPreorderRec(preorder, start + 1, pi - 1);
    if (pi <= end)
      node.right = bstFromPreorderRec(preorder, pi, end);
    
    return node;
  };

  const findPivotIndex = function(preorder, start, end) {
    const pivotValue = preorder[start];
    for (let i = start + 1; i <= end; i++)
      if (preorder[i] > preorder[start])
        return i;
    return end + 1;
  };

  return bstFromPreorderRec(preorder, 0, preorder.length - 1);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(bstFromPreorder([8,5,1,7,10,12]));