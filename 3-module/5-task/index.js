/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let filter = str.split(',').join(' ').split(' ')
  let filter2 = filter.filter((item) => Number(item));
return result = {
  min: Math.min(...filter2),
  max: Math.max(...filter2)
}
}
