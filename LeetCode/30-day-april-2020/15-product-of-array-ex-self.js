/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const leftProduct = [];
  leftProduct[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i];
  }

  const rightProduct = [];
  rightProduct[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * nums[i];
  }

  const result = new Array(nums.length);
  result.fill(1);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      result[i] *= leftProduct[i - 1];
    }
    if (i < nums.length - 1) {
      result[i] *= rightProduct[i + 1];
    }
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([2, 2, 3, 4]));
