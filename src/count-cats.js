const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
//  * @param {Array<Array>} matrix
//  * @return {Number} count of cats found
//  *
//  * @example
//  * countCats([
//  *  [0, 1, '^^'],
//  *  [0, '^^', 2],
//  *  ['^^', 1, 2]
//  * ]) => 3`
//  *
//  */
function countCats(x) {
  let num = 0
  if (x.length === 0) return 0;
  x.forEach(i => {
    i.find(j => {
      if (j === '^^') {num++;}
    })
  })
  return num
  throw new NotImplementedError('x');
}
module.exports = {
  countCats
};
