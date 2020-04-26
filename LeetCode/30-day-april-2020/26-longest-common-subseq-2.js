/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const lcs = function (m, n) {
    const dp = [[]];

    for (let i = 0; i <= m; i++) {
      dp[i] = [];
      for (let j = 0; j <= n; j++) { 
        if (i === 0 || j === 0) 
          dp[i][j] = 0;
        else if (text1[i - 1] === text2[j - 1])
          dp[i][j] = dp[i - 1][j - 1] + 1;
        else
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    return dp[m][n];
  };
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