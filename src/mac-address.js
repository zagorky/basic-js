const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const regEx = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$|^[0-9A-Fa-f]{12}$/;
  return regEx.test(n);
}

console.log(isMAC48Address("00-1B-63-84-45-E6")); // true
console.log(isMAC48Address("Z1-1B-63-84-45-E6")); // false
console.log(isMAC48Address("not a MAC-48 address")); // false
// 6 групп по 2 шестнадцетеричной цифры 0-9a-f = 12 элементов +5 разделителей
// поделены двоеточиями / дефисами /без разделителя

module.exports = {
  isMAC48Address,
};
