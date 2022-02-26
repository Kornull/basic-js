const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
//  *
//  * @param {Array} members names of the members
//  * @return {String | Boolean} name of the team or false
//  * in case of incorrect members
//  *
//  * @example
//  *
//  * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
//  * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  abr = []
  if (Array.isArray(members)) {
    for (let i of members) {
      if (typeof i === 'string') {
        abr.push(i.trim().toUpperCase().slice(0, 1))
      }
    }
    return abr.sort().join('')
  }
  return false
  throw new NotImplementedError('No//t implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
