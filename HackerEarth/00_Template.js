function main(nums) {
  console.log(Math.max(...(nums.map(n => +n))));
}

// DO NOT TOUCH BELOW - To handle I/O
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  const input = chunk.split(/\s+/);
  main(input);
});