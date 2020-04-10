/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);

  const min = this.getMin();
  if (min === undefined || min >= x)
    this.minStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const removedItem = this.stack.pop();
  
  if (removedItem == this.getMin())
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // --> Returns -3.
minStack.pop();
console.log(minStack.top()); //     --> Returns 0.
console.log(minStack.getMin()); //  --> Returns -2.