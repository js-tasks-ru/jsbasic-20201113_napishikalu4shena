/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let userNames = users.map(item => item.name);
  return userNames;
}


