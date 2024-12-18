const { NotImplementedError } = require("../extensions/index.js");

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
  const string = String(str);

  const repeatTimes = options?.repeatTimes ?? 1;
  const separator = options?.separator ?? "+";
  const addition =
    options?.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes = options?.additionRepeatTimes ?? 1;
  const additionSeparator = options?.additionSeparator ?? "|";

  const additionBlock = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  const mainBlock = Array(repeatTimes)
    .fill(string + additionBlock)
    .join(separator);
  return mainBlock;
}

// console.log(
//   repeater(9.234, {
//     repeatTimes: 4,
//     separator: "||",
//     addition: { a: 5 },
//     additionRepeatTimes: 3,
//     additionSeparator: "&&",
//   })
// );

// repeat
// separator
// addition
// add repeat times
// addition separator
// строкаДобавкаДобСепараторДобавкаДобСепараторДобавкаСепаратор * повторений

module.exports = {
  repeater,
};
