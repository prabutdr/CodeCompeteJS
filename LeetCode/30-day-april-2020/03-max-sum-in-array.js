/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || nums.length == 0)
    throw new Error('Input is empty or invalid');

  let currentMax = nums[0];
  return nums.reduce((max, num) => {
    currentMax = Math.max(num, currentMax + num);
    return Math.max(currentMax, max);
  });
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2]));
console.log(maxSubArray([-2, 0, -1]));
console.log(maxSubArray([-1,1,2,1]));