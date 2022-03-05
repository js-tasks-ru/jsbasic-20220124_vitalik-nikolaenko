import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.render();
  }

  render() {
    return createElement(`
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title">
            </h3>
          </div>

          <div class="modal__body">
            A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>

      </div>
    `)
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    this.elem.querySelector('.modal__close').addEventListener('click', () => this.close() );
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') this.close();
    })
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').innerHTML = title;
  }

  setBody(modalBody) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(modalBody);
  }

  close() {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');
  }
}
