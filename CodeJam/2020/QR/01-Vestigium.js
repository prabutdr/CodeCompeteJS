function main() {
  let tc = nextNumber();
  for (let t = 1; t <= tc; t++) {
    const n = nextNumber();
    let trace = 0;
    let rowDuplicates = 0;
    let square = new Array(n);

    for (let i = 1; i <= n; i++) {
      const counts = new Array(n + 1).fill(0);
      square[i] = new Array(n);
      for (let j = 1; j <= n; j++) {
        square[i][j] = nextNumber();
        if (i == j)
          trace += square[i][j];
        counts[square[i][j]]++;
      }

      if (counts.findIndex(value => value > 1) !== -1)
        rowDuplicates++;
    }

    let colDuplicates = 0;
    for (let i = 1; i <= n; i++) {
      const counts = new Array(n + 1).fill(0);
      for (let j = 1; j <= n; j++) {
        counts[square[j][i]]++;
      }

      if (counts.findIndex(value => value > 1) !== -1)
        colDuplicates++;
    }

    console.log(`Case #${t}: ${trace} ${rowDuplicates} ${colDuplicates}`);
  }
}

// DO NOT TOUCH BELOW - To handle I/O
process.stdin.resume();
process.stdin.setEncoding('utf8');
let input = '';
let lineIndex = 0;
let tokenIndex = 0;
let tokens = [];

/**
 * @return {number}
 */
function nextNumber() { return +next() };

/**
 * @return {string}
 */
function next() {
  while (tokens.length == tokenIndex) {
    tokens = nextLine().split(/\s+/);
    tokenIndex = 0;
  }
  return tokens[tokenIndex++];
}

/**
 * @return {string}
 */
function nextLine() {
  if (input.length == lineIndex)
    throw new Error('No more inputs');
  
  return input[lineIndex++];
}

process.stdin.on('data', function(chunk) {
  input += chunk; // Reading input from STDIN
});

process.stdin.on('end', function() {
  input = input.split(/\r?\n/);
  main();
});