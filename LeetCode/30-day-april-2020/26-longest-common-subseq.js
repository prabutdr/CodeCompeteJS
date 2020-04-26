/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const lcs = function (m, n) {
    if (m === 0 || n === 0)
      return 0;
    if (text1[m - 1] === text2[n - 1])
      return 1 + lcs(m - 1, n - 1);
    else 
      return Math.max(lcs(m, n - 1), lcs(m - 1, n));
  }
  return lcs(text1.length, text2.length);
};

console.log(longestCommonSubsequence('abcde', 'ace'));
console.log(longestCommonSubsequence('abc', 'ace'));
console.log(longestCommonSubsequence('abc', 'def'));

// if (m == 0 || n == 0) 
// return 0; 
// if (X[m-1] == Y[n-1]) 
// return 1 + lcs(X, Y, m-1, n-1); 
// else
// return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n)); 