/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.elem = this.render();
      }
  render() {
    this.table = document.createElement('TABLE');
    const thead = `<thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
  </thead>`;
  this.table.insertAdjacentHTML('beforeend', thead);
  const tBody = document.createElement('TBODY');
    for (const row of this.data){
    const rowData = `<tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.salary}</td>
          <td>${row.city}</td>
          <td><button>X</button></td>
        </tr>`;
        tBody.insertAdjacentHTML('beforeend', rowData);
    }
        this.table.append(tBody);
        
        this.table.addEventListener('click', function(event){
          if(event.target.closest("BUTTON")){
            event.target.closest("TR").remove()
  }
  
  });
  return this.table;
  
}}
