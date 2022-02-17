function highlight(table) {
  const rows = table.rows;
  console.log(rows);
    for (let i = 1; i < rows.length; i++) {
      if (!rows[i].cells[3].hasAttribute('data-available')) {
        rows[i].hidden = 'true';
      } else {
        (rows[i].cells[3].dataset.available == 'true') ? 
          rows[i].classList.add('available') : 
          rows[i].classList.add('unavailable');
      };
      (rows[i].cells[2].innerHTML == 'm') ? 
        rows[i].classList.add('male') : 
        rows[i].classList.add('female');
      if (+rows[i].cells[1].innerHTML < 18) {
        rows[i].style="text-decoration: line-through"
      }
    }
}
