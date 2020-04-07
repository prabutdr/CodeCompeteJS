/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    arr.sort((a, b) => a - b);
    let peCount = 1;
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] === arr[i]) {
        peCount++;
      } else if (arr[i - 1] === arr[i] - 1) {
        count += peCount;
        peCount = 1;
      } else {
        peCount = 1;
      }
    }

    return count;
};

console.log(countElements([1,2,3]));
console.log(countElements([1,1,3,3,5,5,7,7]));
console.log(countElements([1,3,2,3,5,0]));
console.log(countElements([1,1,2,2]));
console.log(countElements([1,1,2])); // 1st fail case
console.log(countElements([4,10,11,11,1,9,6,2,4,5,8])); // 2nd fail case