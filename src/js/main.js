import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';

const buttonShow = document.querySelectorAll('.btn-show');

function toggleButtonShow (event) {
let svg, span;
const current = event.target;
const button = current.parentElement; //родитель элемента, на котором сработало событие
const textBox = button.previousElementSibling; //сосед кнопки, бокс с текстом, его будем обрезать после клика

if (current.matches('span')) {
  //если кликнули на текст, то ищем иконку svg
  svg = current.previousElementSibling;//иконка svg, которую перевернем
  toggleButton(current, svg);
} else { //в противном случае начинаем искать от svg
  svg = current;
  span = svg.nextElementSibling; //находим span с текстом
  toggleButton(span, svg);
};
//вспомогательная функция
function toggleButton (text, svg) {
  textBox.classList.toggle('_hide');
  if (textBox.classList.contains('_hide') === false) {
     text.textContent = 'Скрыть';
     svg.classList.add('_rotate');
 
  } else {
    if (textBox.parentElement.classList.contains('about__text')) {
      text.textContent = 'Читать далее';
      svg.classList.remove('_rotate');
 
    } else {
      text.textContent = 'Показать все';
      svg.classList.remove('_rotate');
  
    }
  }
}
}

buttonShow.forEach(( item, index ) => {
  buttonShow[index].addEventListener ('click', toggleButtonShow);
});


// Swiper
let swiper = undefined;
let init = false;

function initSwiper() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
   
        swiper = new Swiper('.section', {
          direction: "horizontal",
          slidesPerView: "auto",
          slidesOffsetBefore: 16,
          centeredSlides: false,
          spaceBetween: 16,
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      };
  } else if (init) {
    if ( swiper !== undefined ) swiper.destroy( true, true );
    };
  }

document.addEventListener("DOMContentLoaded", initSwiper);
window.addEventListener("resize", initSwiper);

