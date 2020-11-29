/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let filter = str.split(',').join(' ').split(' ')
console.log(filter)
  let filter2 = filter.filter((item) => Number(item)).map((item) => Number(item));
  console.log(filter2);
  console.log(filter2.map((item) => typeof item));
return result = {
  min: Math.min(...filter2),
  max: Math.max(...filter2)
}
}



const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73'

console.log(getMinMax(inputData));