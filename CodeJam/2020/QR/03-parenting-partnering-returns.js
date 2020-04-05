class Schedule {
  constructor(start, end, order) {
    this.start = start;
    this.end = end;
    this.order = order;
    this.partner = '';
  }
}

function main() {
  let tcs = nextNumber();
  for (let tc = 1; tc <= tcs; tc++) {
    const n = nextNumber();
    const schedules = new Array(n);
    for (let i = 0; i < n; i++) {
      schedules[i] = new Schedule(nextNumber(), nextNumber(), i);
    }

    if (solveAssignment(...schedules)) {
      let result = '';
      for (let schedule of schedules)
        result += schedule.partner;

      console.log(`Case #${tc}: ${result}`);
    } else {
      console.log(`Case #${tc}: IMPOSSIBLE`);
    }
  }  
}  

function solveAssignment(...schedules) {
  schedules.sort((a, b) => a.start - b.start);
  
  let cLastEnd = 0;
  let jLastEnd = 0;
  for (let schedule of schedules) {
    if (cLastEnd <= schedule.start) {
      schedule.partner = 'C';
      cLastEnd = schedule.end;
    } else if (jLastEnd <= schedule.start) {
      schedule.partner = 'J';
      jLastEnd = schedule.end;
    } else {
      return false;
    }
  }    
  return true;
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