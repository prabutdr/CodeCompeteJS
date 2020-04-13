/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const countIndexMap = new Map();
  countIndexMap.set(0, -1);

  let count = 0;
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    count += (nums[i] === 0 ? -1 : 1);

    if (countIndexMap.has(count)) {
      maxLength = Math.max(maxLength, i - countIndexMap.get(count));
    } else {
      countIndexMap.set(count, i);
    }
  }

  return maxLength;
};

console.log(findMaxLength([0, 1]));
console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0, 1, 0, 1]));
