const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (!s1 || !s2) {
    return 0;
  }
  let count = 0;
  const s1Arr = s1.split("");
  const s2Arr = s2.split("");

  for (let i = 0; i < s1Arr.length; i += 1) {
    const char = s1Arr[i];
    const ind = s2Arr.indexOf(char);

    if (ind !== -1) {
      count += 1;
      s2Arr.splice(ind, 1);
    }
  }
  return count;
}
console.log(getCommonCharacterCount("", "abc")); //0
console.log(getCommonCharacterCount("abca", "xyzbac")); //3
console.log(getCommonCharacterCount("aabcc", "adcaa")); //3
console.log(getCommonCharacterCount("zzzz", "zzzzzzz")); //4
console.log(getCommonCharacterCount("a", "b")); //0
module.exports = {
  getCommonCharacterCount,
};
