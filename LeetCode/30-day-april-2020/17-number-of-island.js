/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islandCount = 0;

  let visitIsland= function(i, j) {
    let stack = [[i, j]];
    while (stack.length > 0) {
      [i, j] = stack.pop();
      grid[i][j] = '*';

      if (i - 1 >= 0 && grid[i - 1][j] == '1')
        stack.push([i - 1, j]);
      if (i + 1 < grid.length && grid[i + 1][j] == '1')
        stack.push([i + 1, j]);
      if (j - 1 >= 0 && grid[i][j - 1] == '1')
        stack.push([i, j - 1]);
      if (j + 1 < grid[i].length && grid[i][j + 1] == '1')
        stack.push([i, j + 1]);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == '0')
        continue;

      if (grid[i][j] == '1') {
        islandCount++;
        visitIsland(i, j);
      }
    }
  }
  return islandCount;
};



console.log(
  numIslands([
    ['1', '1', '1'], 
    ['0', '1', '0'], 
    ['1', '1', '1']]));
