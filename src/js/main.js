import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';

const buttonShow = document.querySelectorAll('.button-show');

function toggleButtonShow (event) {
   const button = event.target.parentElement; //родитель элемента, на котором сработало событие
   const buttonSibling = button.previousElementSibling; //сосед кнопки, бокс с текстом
   const sibling = event.target.previousElementSibling; //иконка svg, которую переворачиваем

   buttonSibling.classList.toggle('_hide');
    if (buttonSibling.classList.contains('_hide') === false){
       event.target.textContent = 'Скрыть';
       sibling.classList.add('_rotate');
    } else {
       event.target.textContent = 'Читать далее';
       sibling.classList.remove('_rotate');
    }
}

buttonShow.forEach (( item, index ) => {
  buttonShow[index].addEventListener ('click', toggleButtonShow);
});
let swiper = undefined;


function initSwiper() {
  if (window.innerWidth <= 768) {
    if (swiper == undefined) {
      // init = true;
   
        swiper = new Swiper('.section', {
          direction: "horizontal",
          slidesPerView: "auto",
          slidesOffsetBefore: 16,
          centeredSlides: true,
          spaceBetween: 16,
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });

  } else {
   if (swiper !== undefined) {
    console.log(swiper);
      swiper.destroy(true, true);
    };
  }
}
}
document.addEventListener("DOMContentLoaded", initSwiper);
window.addEventListener("resize", initSwiper);