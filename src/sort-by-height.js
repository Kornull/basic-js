const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
//  * @param {Array} arr
//  * @return {Array}
//  *
//  * @example
//  * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
//  *
//  * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let s = []
  for (let a of arr) {
    if (a > 0) s.push(a)
  }
  let b = s.sort((a,b)=>a-b)
  for (let i in arr) {
    if (arr[i] < 0) {
      b.splice(i, 0, arr[i])
    }
  }
  return b;

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
