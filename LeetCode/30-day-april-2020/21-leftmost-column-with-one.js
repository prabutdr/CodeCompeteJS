/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

// let findOneStartPosition = function (nums, start, end, row) {
//   // if (nums[row][start] === 1)
//   //   return start;

//   // if (nums[row][start] === 0 && nums[row][end] === 0)
//   //   return -1;

//   while (start <= end) {
//     const mid = start + Math.trunc((end - start) / 2);
//     if (nums[row][mid] === 1 && (mid === 0 || (mid - 1 >= 0 && nums[row][mid - 1] === 0)))
//       return mid;
//     else if (nums[row][mid] === 1)
//       end = mid - 1;
//     else
//       start = mid + 1;
//   }

//   return -1;
// };

// const matrix = [[0,0,0,0],[0,0,0,1],[0,0,1,1],[0,1,1,1],[1,1,1,1]];
// for (let i = 0; i < matrix.length; i++) {
//   console.log(matrix[i], findOneStartPosition(matrix, 0, matrix[i].length - 1, i));
// }

let findOneStartPosition = function (binaryMatrix, start, end, row) {
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    const midItem = binaryMatrix.get(row, mid);
    if (midItem === 1 && (mid === 0 || (mid - 1 >= 0 && binaryMatrix.get(row, mid - 1) === 0)))
      return mid;
    else if (midItem === 1)
      end = mid - 1;
    else
      start = mid + 1;
  }

  return -1;
};
/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions();
  let leftMostIdx = cols;

  for (let i = 0; i < rows; i++) {
    const currentLMI = findOneStartPosition(binaryMatrix, 0, cols, i);

    if (currentLMI !== -1 && currentLMI < leftMostIdx)
      leftMostIdx = currentLMI;
  }
  return leftMostIdx === cols ? -1: leftMostIdx;
};

// TODO: should try optimal approach