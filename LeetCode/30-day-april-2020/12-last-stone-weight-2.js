/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxHeap(stones);

  while (maxHeap.count() > 1) {
    const stone1 = maxHeap.remove();
    const stone2 = maxHeap.remove();
    const diff = stone1 - stone2;
    if (diff !== 0) {
      maxHeap.insert(diff);
    }
  }

  if (maxHeap.count() === 1) {
    return maxHeap.remove();
  }

  return 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
