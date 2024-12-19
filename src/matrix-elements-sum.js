const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // remove line with error and write your code here
  let counter = 0;
  for (let col = 0; col < matrix[0].length; col += 1) {
    for (let row = 0; row < matrix.length; row += 1) {
      if (matrix[row][col] === 0) {
        break;
      }
      counter += matrix[row][col];
    }
  }
  return counter;
}

console.log(
  getMatrixElementsSum([
    [1, 2, 3, 4],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
); // 15

module.exports = {
  getMatrixElementsSum,
};
