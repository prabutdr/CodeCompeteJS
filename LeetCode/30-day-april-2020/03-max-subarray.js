/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || nums.length == 0)
    throw new Error('Input is empty or invalid');

  let max = nums[0];
  let currentMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    max = Math.max(currentMax, max);
  }

  return max;
};