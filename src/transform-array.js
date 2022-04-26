const { NotImplementedError } = require('../extensions/index.js');


function transform(arr) {
  const textArr = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  const newArr = [];
  if (!Array.isArray(arr)) {
    throw new NotImplementedError("'arr' parameter must be an instance of the Array! if the arr is not an Array");
  }
  if (arr.length == 0) return arr;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-next' && i !== 0) i++;
    else if (arr[i] === '--discard-prev' && i !== 0) newArr.pop();
    else if (arr[i] === '--double-next' && i !== newArr.length - 1) {
      if (typeof arr[i] === 'number') {
        newArr.push(arr[i += 1]);
      }
    }
    if (arr[i] === '--double-prev') {
      if (typeof arr[i] === 'number') {
        newArr.push(arr[i -= 1]);
      }
    }
    if (!textArr.includes(arr[i]) && arr[i] !== undefined) {
      newArr.push(arr[i])
    }
  }

  return newArr;
}

// arr.forEach(x => {
//   if(isNaN(x)) newArr.push(x);
//   if(newArr.length > 0  && x === '--discard-prev') newArr.pop();
// })
// }

module.exports = {
  transform
};
