const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let allStr = '';
  const sep = options.separator === undefined ? '+' : options.separator;
  const add = options.addition === undefined ? '' : options.addition;
  const addSep = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  const repeat = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  const repeat2 = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;

  for (let i = 1; i <= repeat; i++) {
    allStr = allStr + str;
    for (let j = 1; j <= repeat2; j++) {
      allStr = allStr + add;
      if (j < repeat2)
        allStr = allStr + addSep;
    }
    if (i < repeat)
      allStr = allStr + sep;
  }

return allStr;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
