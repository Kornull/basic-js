const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let sum = 1;
  let newStr = ''
  if (str === '') return '';
  let a = str.split('');
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      sum++;
    } else if (a[i] !== a[i + 1] && sum > 1) {
      newStr += `${sum}${a[i - 1]}`
      sum = 1;
    } else {
      newStr += a[i]
    }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
