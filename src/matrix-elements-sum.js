const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let sumAll = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        try {
          sumAll.push(matrix[i + 1][j]);
        }
        catch {
          continue;
        }
      }
    }
  }
  for (let y = 0; y < matrix[0].length; y++) {
    sumAll.push(matrix[0][y]);
  }
  return sumAll.reduce((a, b) => a + b, 0);

}

module.exports = {
  getMatrixElementsSum
};
