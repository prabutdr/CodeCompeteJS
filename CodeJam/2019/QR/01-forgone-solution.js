function main() {
  const tc = nextNumber();
  for (let i = 1; i <= tc; i++) {
    const digits = next().split('');
    let num1 = '';
    let num2;

    for (digit of digits) {
      if (digit == 4) {
        num2 = num2? num2 + '1': '1';
        num1 += 3;
      } else {
        num1 += digit;
        if (num2) num2 += '0';
      }
    }
    console.log(`Case #${i}: ${num1} ${num2}`);
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