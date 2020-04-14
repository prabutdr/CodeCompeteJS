/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  let count = 0;
  for (const sh of shift) {
    count += (sh[0] === 0) ? sh[1] : -sh[1];
  }

  count %= s.length;

  if (count < 0) {
    count = s.length + count;
  }

  // console.log(count % s.length);
  return s.substring(count) + s.substring(0, count);
};

console.log(stringShift('abc', [[0, 1], [1, 2]]));
console.log(stringShift('abcdefg', [[1, 1], [1, 1], [0, 2], [1, 3]]));
console.log(stringShift('xqgwkiqpif', [[1,4],[0,7],[0,8],[0,7],[0,6],[1,3],[0,1],[1,7],[0,5],[0,6]]));
// "qpifxqgwki"
