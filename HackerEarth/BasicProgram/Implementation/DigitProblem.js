/**
 * 
 * @param {Array.<string>} nums 
 */
function main(nums) {
  const x = nums[0];
  let k = +nums[1];

  let result = '';
  for (let ch of x) {
    if (k <= 0) break;
    if (ch !== '9') {
      k--;
      result += '9';
    } else {
      result += ch;
    }
  }

  result += x.substr(result.length);

  console.log(result);
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

// Sample IO
// 4483 2