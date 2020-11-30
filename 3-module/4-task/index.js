/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let crAge = age;
  let crAgeUsers = users.filter(item => item['age'] <= crAge)
  return crAgeUsers.map((item, index) => index !== crAgeUsers.length -1 ? `${item['name']}, ${item['balance']}\n` : `${item['name']}, ${item['balance']}`).join('')

}



