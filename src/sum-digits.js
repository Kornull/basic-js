const { NotImplementedError } = require('../extensions/index.js');


function getSumOfDigits(n) {
  let sum = 0;
  n = n.toString().split('');
  for (let i = 0; i < n.length; i++) {
    sum += +n[i]
  }
  if (sum.toString().length > 1) return getSumOfDigits(sum);

  return sum;
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
