/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length == 0)
    return 0;
  // else if (matrix.length == 1)
  //   return matrix[0][0];

  const s = [];
  let max = 0;

  for(let i = 0; i < matrix.length; i++) {
    s[i] = [];
    s[i][0] = matrix[i][0];
        if (max < s[i][0])
          max = s[i][0];
  }

  for(let j = 0; j < matrix[0].length; j++) {
    s[0][j] = matrix[0][j];
        if (max < s[0][j])
          max = s[0][j];
  }

  for(let i = 1; i < matrix.length; i++) { 
    for(let j = 1; j < matrix[0].length; j++) {
      if(matrix[i][j] == 1) {
        s[i][j] = Math.min(s[i][j - 1], s[i - 1][j], s[i - 1][j - 1]) + 1;
        if (max < s[i][j])
          max = s[i][j];
      }
      else {
        s[i][j] = 0;
      }
    }
  }

  return max * max;
};

console.log(maximalSquare([[1, 1], [1, 1]]));