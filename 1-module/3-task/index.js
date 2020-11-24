/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str.length == 0) return "";
  lowStr = str.toLowerCase();
  return lowStr[0].toUpperCase() + lowStr.slice(1);
}
