// Time complexity O(n), Space complexity O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let lowPossibleBrackets = 0;
  let highPossibleBrackets = 0;

  for (const ch of s) {
    lowPossibleBrackets += (ch === '(') ? 1 : -1;
    highPossibleBrackets += (ch !== ')') ? 1 : -1;
    if (highPossibleBrackets < 0) {
      break;
    }
    lowPossibleBrackets = Math.max(lowPossibleBrackets, 0);
  }

  return lowPossibleBrackets === 0;
};

console.log(checkValidString('()'));
console.log(checkValidString('(*'));
console.log(checkValidString('**'));
console.log(checkValidString('*'));
console.log(checkValidString(''));
console.log(checkValidString('(*)'));
console.log(checkValidString('(*))'));
console.log(checkValidString('(*)('));
console.log(checkValidString('('));
