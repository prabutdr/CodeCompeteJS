/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
  this.set = new Set();
  this.map = new Map();
  this.head = undefined;
  this.last = undefined;
  for (let num of nums) {
    this.add(num);
  }
};

var Node = function (value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  // let node = this.head;
  // while (node) {
  //   console.log(node.value);
  //   node = node.next;
  // }
  if (this.head == undefined) return -1
  else return this.head.value;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  if (this.set.has(value) || this.map.has(value)) {
    const node = this.map.get(value);
    if (node != undefined) {
      if (node === this.head) {
        this.head = this.head.next;
        if (this.head == undefined) this.last = undefined;
      }
      else if (node === this.last) {
        this.last = this.last.prev;
        this.last.next = undefined;
      }
      else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
      }
      this.map.delete(value);
      this.set.add(value);
    }
  } else {
    const node = new Node(value);
    if (this.last == undefined) {
      this.head = this.last = node;
    } else {
      // const node = new Node(value);
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    }
    this.map.set(value, node);
  }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

let firstUnique = new FirstUnique([2,3,5]);
console.log(firstUnique.showFirstUnique()); // return 2
firstUnique.add(5);            // the queue is now [2,3,5,5]
console.log(firstUnique.showFirstUnique()); // return 2
firstUnique.add(2);            // the queue is now [2,3,5,5,2]
console.log(firstUnique.showFirstUnique()); // return 3
firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
console.log(firstUnique.showFirstUnique()); // return -1

firstUnique = new FirstUnique([7,7,7,7,7,7]);
console.log(firstUnique.showFirstUnique()); // return -1
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
console.log(firstUnique.showFirstUnique()); // return 17

firstUnique = new FirstUnique([809]);
console.log(firstUnique.showFirstUnique()); // return 809
firstUnique.add(809);          // the queue is now [809,809]
console.log(firstUnique.showFirstUnique()); // return -1

