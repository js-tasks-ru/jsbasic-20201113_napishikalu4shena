/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let genderIndex;
    let statusIndex;
    let ageIndex;
  
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    if (table.rows[0].cells[i].textContent === "Gender") {
      genderIndex = i
    
    }
    if (table.rows[0].cells[i].textContent === 'Status') {
      statusIndex = i;
    
    }
    if (table.rows[0].cells[i].textContent === 'Age') {
      ageIndex = i;
    
    }
  }
      let classContainer = {
      m: 'male',
      f: 'female',
      true: 'available',
      false: 'unavailable'
    }
      for (let k = 1; k < table.rows.length; k++) {
      let classGender = table.rows[k].cells[genderIndex];
      classGender.parentNode.classList.add(classContainer[classGender.innerHTML]);
      let classAge = +table.rows[k].cells[ageIndex].innerHTML;
          if (classAge < 18) {
        classGender.parentNode.setAttribute('style', 'text-decoration: line-through')
        }
      let classStatus = table.rows[k].cells[statusIndex];
        if (classStatus.hasAttribute('data-available')) {
        let elem = classStatus.getAttribute('data-available');
        classStatus.parentNode.classList.add(classContainer[elem]);
      } else {
        classStatus.parentNode.hidden = true;
      }
    }
}
  



