/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const startIdx = nums.indexOf(0);
  if (startIdx === -1)
    return;

  let lastIdx = startIdx;
  for (let i = startIdx + 1; i < nums.length; i++) {
    if (nums[i] === 0)
      continue;
    
    nums[lastIdx++] = nums[i];
  }
  nums.fill(0, lastIdx);
};

const nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);