// Time complexity O(n), Space complexity O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const paramStack = [];
  const starStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      paramStack.push(i);
    } else if (s[i] === '*') {
      starStack.push(i);
    } else {
      if (paramStack.length !== 0) {
        paramStack.pop();
      } else if (starStack.length !== 0) {
        starStack.pop();
      } else {
        return false;
      }
    }
  }

  while (paramStack.length > 0 && starStack.length > 0) {
    if (paramStack.pop() > starStack.pop()) {
      return false;
    }
  }

  return paramStack.length === 0;
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
