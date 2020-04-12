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

/**
 * @param {number[]} items
 */
function MaxHeap (items) {
  this.items = [...items];

  this.count = () => this.items.length;

  this.parent = i => {
    if (i <= 0 || i >= this.count) {
      return -1;
    }

    return Math.trunc((i - 1) / 2);
  }

  this.left = i => {
    const res = 2 * i + 1;
    if (res >= this.count) {
      return -1;
    }
    return res;
  };

  this.right = i => {
    const res = 2 * i + 2;
    if (res >= this.count) {
      return -1;
    }
    return res;
  }

  this.perculateDown = i => {
    let max = i;
    const l = this.left(i);
    if (l !== -1 && this.items[max] < this.items[l]) {
      max = l;
    }

    const r = this.right(i);
    if (r !== -1 && this.items[max] < this.items[r]) {
      max = r;
    }

    if (max !== i) {
      const temp = this.items[i];
      this.items[i] = this.items[max];
      this.items[max] = temp;
      this.perculateDown(max);
    }
  };

  this.remove = () => {
    if (this.count() <= 0) {
      return -1;
    }

    const res = this.items[0];
    this.items[0] = this.items[this.count() - 1];
    this.items.pop();
    this.perculateDown(0);
    return res;
  }

  this.insert = (data) => {
    let i = this.count();
    let parent = this.parent(i);
    while (parent !== -1 && this.items[parent] < data) {
      this.items[i] = this.items[parent];
      i = parent;
      parent = this.parent(i);
    }
    this.items[i] = data;
  }

  // first initialize
  for (let i = Math.trunc((this.count() - 1) / 2); i >= 0; i--) {
    this.perculateDown(i);
  }
  // console.log(this.items);
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
