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
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.table = document.createElement('table');

    this.table.insertAdjacentHTML('afterBegin', '<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead>');

    const tBody = this.table.createTBody();
    
    for (const row of rows) {
      tBody.insertAdjacentHTML('beforeEnd', `<tr><td>${row.name}</td><td>${row.age}</td><td>${row.salary}</td><td>${row.city}</td><td><button> X </button></td></tr>`);
    }

    this.table.addEventListener('click', this.onClick);

  }

  onClick(event) {
    const row = event.target.closest('TR');

    if (event.target.matches('button')) {
      row.remove();
    }
  }

  get elem() {
    return this.table
  }
}
