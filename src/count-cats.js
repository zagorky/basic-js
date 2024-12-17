const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const arr = matrix.flat().reduce((acc, elem) => {
    return elem === "^^" ? (acc += 1) : acc;
  }, 0);

  return arr;
}
// console.log(
//   countCats([
//     ["##", "dd", "00"],
//     ["^^", "..", "ss"],
//     ["AA", "dd", "Oo"],
//   ])
// );

module.exports = {
  countCats,
};
