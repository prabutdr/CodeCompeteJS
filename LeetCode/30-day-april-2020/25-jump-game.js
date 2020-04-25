/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length <= 1)
    return true;

  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (max <= i && nums[i] === 0)
      return false;

    const posMax = i + nums[i];
    if (posMax > max) {
      max = posMax;

      if (max >= nums.length - 1)
        return true;
    }
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
console.log(canJump([2, 0]));
