const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split("");
  let res = "";
  let counter = 1;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i + 1]) {
      counter += 1;
    } else {
      res += (counter > 1 ? counter : "") + arr[i];
      counter = 1;
    }
  }
  return res;
}
// console.log(encodeLine("aabbccc")); // '2a2b3c' aa 2a / bb 2b / ccc 3c

module.exports = {
  encodeLine,
};
