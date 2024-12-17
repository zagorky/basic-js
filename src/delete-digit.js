const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString();
  let maxSum = 0;
  for (let i = 0; i < nStr.length; i += 1) {
    const current = nStr.slice(0, i) + nStr.slice(i + 1);
    if (current > maxSum) {
      maxSum = current;
    }
  }
  return +maxSum;
}
// console.log(deleteDigit(222219)); // 22229
// console.log(deleteDigit(152)); //52
// console.log(deleteDigit(342)); //42

module.exports = {
  deleteDigit,
};
