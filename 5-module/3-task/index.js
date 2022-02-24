function initCarousel() {
  const btnLeft = document.querySelector('.carousel__arrow_left');
  const btnRight = document.querySelector('.carousel__arrow_right');
  const carouselItems = document.querySelector('.carousel__inner');

  let width = carouselItems.offsetWidth;
  
  btnLeft.style.display = 'none';
  btnLeft.addEventListener('click', () => move(1)); // кнопка «влево»
  btnRight.addEventListener('click', () => move(0)); // кнопка «вправо»

  function move(direction) {
      let x = carouselItems.style.transform; // получим координату списка

      if (x == "") {
        x = 0;
      } else {
        x = +x.slice(11, -3);
      }

      if (direction) {
          x += width; // двигаем список вправо (кнопка «влево»)
          if (x > 0) x = 0;
        } else {
          x -= width; // двигаем список влево (кнопка «вправо»)
          if ( x < -(width * 3) ) x = -(width * 3);
        }

        ( x == -(width * 3) ) ? btnRight.style.display = 'none' : 
        btnRight.style.display = '';
        ( x == 0 ) ? btnLeft.style.display = 'none' : 
        btnLeft.style.display = '';

      carouselItems.style.transform = `translateX(${x}px)`;
  }
}
