import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this._container = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
        </div>
      </div>
    `);

    this.slides.forEach((slide) => {
      this._container.querySelector('.carousel__inner').append(createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `))
    });
    
    const btnLeft = this._container.querySelector('.carousel__arrow_left');
    const btnRight = this._container.querySelector('.carousel__arrow_right');
    const carouselItems = this._container.querySelector('.carousel__inner');
    const numberOfSlides = this.slides.length;

    
    btnLeft.style.display = 'none';
    btnLeft.addEventListener('click', () => move(1)); // кнопка «влево»
    btnRight.addEventListener('click', () => move(0)); // кнопка «вправо»

    function move(direction) {
      let x = carouselItems.style.transform; // получим координату списка
      let width = carouselItems.offsetWidth;
        
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
          if ( x < -( width * (numberOfSlides - 1) ) ) x = -( width * (numberOfSlides - 1) );
        }
        
          ( x == -( width * (numberOfSlides - 1) ) ) ? btnRight.style.display = 'none' : 
          btnRight.style.display = '';
          ( x == 0 ) ? btnLeft.style.display = 'none' : 
          btnLeft.style.display = '';

        carouselItems.style.transform = `translateX(${x}px)`;
    }

    this._container.querySelectorAll('.carousel__slide').forEach( (slide) => {
      slide.querySelector('.carousel__button').addEventListener('click', (event) => {
        this._container.dispatchEvent(new CustomEvent('product-add', {
          detail: slide.dataset.id,
          bubbles: true
        }))
    })
    })

  }

  get elem() {
    return this._container
  }
}
