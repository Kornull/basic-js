const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {}
  if (domains.length === 0) return obj;
  let newStr = `${domains.join('.')}`
  let b = newStr.split('.')
  for (let i of b) {
    let sum = 0
    let num = newStr.indexOf(i)
    while (num !== -1) {
      sum++
      num = newStr.indexOf(i, num + 1);
      obj[`.${i}`] = sum
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};
