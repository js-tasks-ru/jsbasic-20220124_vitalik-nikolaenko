import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();

    this.scroll();
    this.select();
  }

  render() {
    let elemMenu = createElement(`
      <div class="ribbon">
        <!--Кнопка прокрутки влево-->
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <!--Ссылки на категории-->
        <nav class="ribbon__inner">
        </nav>

        <!--Кнопка прокрутки вправо-->
        <button class="ribbon__arrow ribbon__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `);

    for (const item of this.categories) {
      elemMenu.querySelector('.ribbon__inner').append(
        createElement(`
          <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
        `)
      )
    }

    return elemMenu
  }

  scroll() {
    const btnLeft = this.elem.querySelector('.ribbon__arrow_left');
    const btnRight = this.elem.querySelector('.ribbon__arrow_right');
    const ribbonInner = this.elem.querySelector('.ribbon__inner');

    btnRight.classList.add('ribbon__arrow_visible');

    btnLeft.addEventListener('click', () => move(1))
    btnRight.addEventListener('click', () => move(0))

    function move(direction) {
      if (direction) {
        ribbonInner.scrollBy(-350, 0);
      } else {
        ribbonInner.scrollBy(350, 0);
      }
    }

    ribbonInner.addEventListener('scroll', () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft == 0) {
        btnLeft.classList.remove('ribbon__arrow_visible');
      } else {
        btnLeft.classList.add('ribbon__arrow_visible');
      }

      if (scrollRight < 1) {
        btnRight.classList.remove('ribbon__arrow_visible');
      } else {
        btnRight.classList.add('ribbon__arrow_visible');
      }
    })
  }

  select() {
    const ribbonItems = this.elem.querySelectorAll('.ribbon__item');
    const ribbonInner = this.elem.querySelector('.ribbon__inner');

    ribbonInner.addEventListener('click', (event) => {
      if (event.target.nodeName != 'A') return;
      event.preventDefault();
      for (const item of ribbonItems) {
        item.classList.remove('ribbon__item_active')
      }

      event.target.classList.add('ribbon__item_active');

      this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
        detail: event.target.dataset.id,
        bubbles: true
      }))
    })
  }

}
