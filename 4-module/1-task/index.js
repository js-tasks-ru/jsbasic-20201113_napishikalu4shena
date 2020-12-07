/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
let uList = document.createElement('ul');
let friendsFaS = friends.map(item => `${item.firstName} ${item.lastName}`)
for(let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    li.textContent = friendsFaS[i];
    uList.append(li);}
   return uList;
}
 

