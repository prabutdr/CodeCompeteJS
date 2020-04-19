/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let binarySearch = function (nums, target, start, end) {
    while (start <= end) {
      const mid = start + Math.trunc((end - start) / 2);
      if (nums[mid] === target)
        return mid;
      else if (nums[mid] > target) 
        end = mid - 1;
      else
        start = mid + 1;
    }
    return -1;
  };

  let searchRec = function (nums, target, start, end) {
    if (start > end)
      return -1;
    
    const mid = start + Math.trunc((end - start) / 2);

    if (nums[mid] === target)
      return mid;
    else if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target < nums[mid])
        return binarySearch(nums, target, start, mid - 1);
      else
        return searchRec(nums, target, mid + 1, end);
    } else {
      if (nums[mid] < target && target <= nums[end])
        return binarySearch(nums, target, mid + 1, end);
      else
        return searchRec(nums, target, start, mid - 1);
    }
  };

  return searchRec(nums, target, 0, nums.length - 1);
};

// [4,5,6,7,0,1,2], target = 0
// console.log(search([4,5,6,7,0,1,2], 0));
// console.log(search([4,5,6,7,0,1,2], 3));
// console.log(search([4,5,6,7,0,1,2], 4));
// console.log(search([4,5,6,7,0,1,2], 2));
console.log(search([5, 1, 3], 3));