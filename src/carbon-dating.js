const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  const sampleActivityCopy = parseFloat(sampleActivity);
  if (sampleActivityCopy <= 0 || sampleActivityCopy > MODERN_ACTIVITY) {
    return false;
  }
  const nLog = Math.log(2);
  const age =
    Math.log(MODERN_ACTIVITY / sampleActivityCopy) / (nLog / HALF_LIFE_PERIOD);
  return age > 0 ? Math.ceil(age) : false;
}

module.exports = {
  dateSample,
};
