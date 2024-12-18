const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsObj = {};
  domains.forEach((elem) => {
    const domainELems = elem.split(".").reverse();
    let cur = "";
    domainELems.forEach((domain) => {
      cur += `.${domain}`;
      dnsObj[cur] = (dnsObj[cur] || 0) + 1;
    });
  });

  return dnsObj;
}
// console.log(getDNSStats(["epam.com", "info.epam.com"])); // { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }

module.exports = {
  getDNSStats,
};
