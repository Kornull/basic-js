const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value !== undefined) { this.arr.push(`( ${value} )`); }
    else { this.arr.push(`( )`); }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.arr.length) {
      if (position % 1 === 0) {
        this.arr.splice(position - 1, 1);
      }
      else {
        this.arr = [];
        throw new Error("You can't remove incorrect link!");
      }
    } else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const res = this.arr;
    this.arr = []
    return res.join('~~')
  },
}
module.exports = {
  chainMaker
};
