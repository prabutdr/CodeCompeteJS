/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cacheList = [];
  this.cacheMap = new Map();
};

LRUCache.prototype.isCached = function (key) {
  return this.cacheMap.has(key);
};

LRUCache.prototype.moveFront = function (key) {
  const index = this.cacheList.indexOf(key);
  this.cacheList.unshift(this.cacheList[index]);
  this.cacheList.splice(index + 1, 1);
};

LRUCache.prototype.removeBack = function () {
  this.cacheMap.delete(this.cacheList[this.cacheList.length - 1]);
  this.cacheList.pop();
};

/**
* @param {number} key
* @returns {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.isCached(key)) {
    this.moveFront(key);
    return this.cacheMap.get(key);
  }
  return -1;
};

/** 
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.isCached(key)) {
    this.cacheMap.set(key, value);
    this.moveFront(key);
  } else {
    this.cacheList.unshift(key);
    this.cacheMap.set(key, value);
    if (this.cacheMap.size > this.capacity) {
      this.removeBack();
    }
  }
};
