/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set();
  while (n !== 1) {
    set.add(n);
    n = sumOfDigitSquare(n);
    if (set.has(n)) return false;
  }
  return true;
};

/**
 * @param {number} n
 * @return {number}
 */
var sumOfDigitSquare = 
  n => String(n).split("").reduce((sum, d) => sum += (d * d), 0);

for (let i = 1; i <= 100; i++) if (!isHappy(i)) console.log(i);
