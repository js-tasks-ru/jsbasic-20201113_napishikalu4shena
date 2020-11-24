/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lowStr = str.toLowerCase();
  return lowStr.includes('1xbet') || lowStr.includes('xxx');
}