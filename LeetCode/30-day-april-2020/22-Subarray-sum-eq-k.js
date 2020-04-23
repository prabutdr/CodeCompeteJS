/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0;
  let sum = 0;

  const map = new Map();
  map.set(0, 1);

  for (let num of nums) {
    sum += num;
    const diff = sum - k;
    if (map.has(diff))
      count += map.get(diff);

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};

console.log(subarraySum([1,1,1], 2));

// TODO: Revisit