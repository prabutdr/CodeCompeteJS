// O(N) time and O(1) space
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let scp = nextChar(S);
  let tcp = nextChar(T);

  while (scp[0] >= 0 && tcp[0] >= 0 && scp[1] === tcp[1]) {
    scp = nextChar(S, scp[0] - 1);
    tcp = nextChar(T, tcp[0] - 1);
  }

  return scp[0] < 0 && tcp[0] < 0;
};

function nextChar (str, i = str.length - 1, backspaceCount = 0) {
  while (i >= 0 && str[i] === '#') {
    backspaceCount++;
    i--;
  }

  while (backspaceCount > 0 && str[i] !== '#') {
    i--;
    backspaceCount--;
  }

  if (backspaceCount > 0) {
    return nextChar(str, i, backspaceCount);
  }

  return str[i] === '#' ? nextChar(str, i) : [i, str[i]];
}

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a##c', '#a#c'));
console.log(backspaceCompare('a#c', 'b'));
console.log(backspaceCompare('bxj##tw', 'bxo#j##tw'));
