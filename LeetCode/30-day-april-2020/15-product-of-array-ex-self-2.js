/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  result[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i];
  }

  let prevRightProduct = nums[nums.length - 1];
  result[nums.length - 1] = result[nums.length - 2];
  for (let i = nums.length - 2; i > 0; i--) {
    result[i] = result[i - 1] * prevRightProduct;
    prevRightProduct *= nums[i];
  }
  result[0] = prevRightProduct;

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([2, 2, 3, 4]));
console.log(productExceptSelf([2, 3]));
