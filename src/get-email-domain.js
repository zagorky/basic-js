const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let regEx = /@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/g;
  let res = [...email.matchAll(regEx)].flat();
  return res ? res[1] : null;
}
module.exports = {
  getEmailDomain,
};
