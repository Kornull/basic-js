const { NotImplementedError } = require('../extensions/index.js');

// /**
//  * Extract season from given date and expose the enemy scout!
//  *
//  * @param {Date | FakeDate} date real or fake date
//  * @returns {String} time of the year
//  *
//  * @example
//  *
//  * getSeason(new Date(2020, 02, 31)) => 'spring'
//  *
//  */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
 
  let a = date.toString().split(' ')


  if (a[1] === 'Oct' || a[1] === 'Nov' || a[1] === 'Sep') {
    return 'autumn';
  }
  if (a[1] === 'Feb' || a[1] === 'Jan' || a[1] === 'Dec') {
    return 'winter';
  }
  if (a[1] === 'Jul' || a[1] === 'Aug' || a[1] === 'Jun') {
    return 'summer';
  }
  if (a[1] === 'Apr' || a[1] === 'Mar' || a[1] === 'May') {
    return 'spring';
  }
}

module.exports = {
  getSeason
};
