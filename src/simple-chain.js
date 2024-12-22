const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value === undefined ? " " : value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};

console.log(
  chainMaker
    .addLink(1.233)
    .addLink("ABC")
    .addLink("GHI")
    .reverseChain()
    .addLink(NaN)
    .addLink(false)
    .addLink("ABC")
    .reverseChain()
    .reverseChain()
    .reverseChain()
    .finishChain()
); // '( ABC )~~( false )~~( NaN )~~( 1.233 )~~( ABC )~~( GHI )')

module.exports = {
  chainMaker,
};
