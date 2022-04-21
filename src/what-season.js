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
  // console.log(Object.prototype.toString.call(date) !== '[object Date]')
  // console.log()
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('toString')) throw new Error('Invalid date!');
  if (date instanceof Date) {
    let d = date.getMonth();

    if (d <= 1 || d === 11) return 'winter';
    if (d > 1 && d <= 4) return 'spring';
    if (d > 4 && d <= 7) return 'summer';
    if (d > 7 && d <= 10) return 'autumn';
  } else {
    throw new Error('Invalid date!')
  }
}
module.exports = {
  getSeason
};
