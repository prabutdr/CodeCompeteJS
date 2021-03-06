function main () {
  const tcs = nextNumber();
  for (let tc = 1; tc <= tcs; tc++) {
    // TODO: solution here...
    console.log(`Case #${tc}: ${tc}`);
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
function nextNumber () { return +next(); }

/**
 * @return {string}
 */
function next () {
  while (tokens.length === tokenIndex) {
    tokens = nextLine().split(/\s+/);
    tokenIndex = 0;
  }
  return tokens[tokenIndex++];
}

/**
 * @return {string}
 */
function nextLine () {
  if (input.length === lineIndex) {
    throw new Error('No more inputs');
  }

  return input[lineIndex++];
}

process.stdin.on('data', function (chunk) {
  input += chunk; // Reading input from STDIN
});

process.stdin.on('end', function () {
  input = input.split(/\r?\n/);
  main();
});
