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
  c = []
  if (domains.length === 0) return obj;
  let newStr = `.${domains.join('.')}`
  newStr = `.${newStr.split('.').reverse().join('.')}`
  for (let i = 0; i < domains.length; i++) {
    let revDov = domains[i].split('.').reverse()
    for (let t = 0; t < revDov.length; t++) {
      revDov[t] = `.${revDov[t]}`

    }
    c.push(revDov)
  }
  for (let i = 0; i < c.length; i++) {
    let b = '';
    for (let j = 0; j < c[i].length; j++) {
      let count = 0
      b += c[i][j]
      let num = newStr.indexOf(b)
      while (num !== -1) {
        count++
        num = newStr.indexOf(b, num + 1);
        obj[b] = count
      }
    }

  }
return(obj)

}

module.exports = {
  getDNSStats
};
