// O(N) time and O(N) space
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  return revisedString(S) === revisedString(T);
};

function revisedString (str) {
  const stack = [];

  for (const ch of str) {
    if (ch === '#') {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join('');
}

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a##c', '#a#c'));
console.log(backspaceCompare('a#c', 'b'));
console.log(backspaceCompare('bxj##tw', 'bxo#j##tw'));
