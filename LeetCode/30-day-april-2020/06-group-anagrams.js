/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let groupMap = new Map();

  for (let str of strs) {
    const key = str.split('').sort().join();
    if (groupMap.has(key)) {
      groupMap.get(key).push(str);
    } else {
      groupMap.set(key, [str]);
    }
  }

  return [...groupMap.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));