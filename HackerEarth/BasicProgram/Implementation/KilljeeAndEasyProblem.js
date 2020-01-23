/**
 * 
 * @param {Array} input 
 */
function main(input) {
  const n = +input.shift();
  const m = +input.shift();

  const edges = {};
  for (let i = 0; i < 2 * m; i += 2) {
    const x = +input[i];
    const y = +input[i + 1];

    edges[x] ? edges[x].push(y) : edges[x] = [y];
    edges[y] ? edges[y].push(y) : edges[y] = [x];
  }
  // console.log(edges);

  const visited = [];
  visited.length = n + 1;
  const result = [];
  visitDFS(1);

  console.log(result.length);
  console.log(result.join(' '));

  function visitDFS(index) {
    visited[index] = true;
    result.push(index);

    for (let adj of edges[index]) {
      if (!visited[adj]) {
        visitDFS(adj);
      }
    }
  }
}

// DO NOT TOUCH BELOW - To handle I/O
process.stdin.resume();
process.stdin.setEncoding('utf8');
let input = '';

process.stdin.on('data', function(chunk) {
  input += chunk; // Reading input from STDIN
});

process.stdin.on('end', function() {
  main(input.split(/\s+/));
});