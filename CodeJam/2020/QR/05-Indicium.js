function main() {
  let tcs = nextNumber();
  for (let tc = 1; tc <= tcs; tc++) {
    const n = nextNumber();
    const trace = nextNumber();

    if (trace % n === 0) {
      const skipValue = trace / n;
      const square = new Array(n);
      for (let i = 0; i < n; i++) {
        square[i] = new Array(n);
        let value = i == 0? skipValue : square[i - 1][0] - 1;
        let sign = -1;
        for (let j = 0; j < n; j++) {
          if (i == j) {
            square[i][j] = skipValue;
            sign = 1;
            continue;
          }

          if (skipValue == value)
            value += sign;

          if (value > n) value = 1;
          if (value < 1) value = n;
          
          // if (value > n) value = value % n;
          square[i][j] = value;
          value += sign;
        }
      }
      console.log(`Case #${tc}: POSSIBLE`);
      printSquare(square);
    } else if (trace === (n * (n + 1) / 2)) {
      console.log(`Case #${tc}: ${tc}`);
    } else {
      console.log(`Case #${tc}: IMPOSSIBLE`);
    }
  }
}

function printSquare(square) {
  for (let row of square)
    console.log(row.join(' '));
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