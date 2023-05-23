import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';

const buttonShow = document.querySelectorAll('.button-show');

function toggleButtonShow (event) {
console.log(event.target);
  const button = event.target.parentElement; //родитель элемента, на котором сработало событие

if (event.target.matches('span')) {
  const sibling = event.target.previousElementSibling;//иконка svg, которую переворачиваем
} else {
  const svgParent = event.target.parentElement;
  console.log(svgParent);
  const sibling = event.target.nextElementSibling;
  console.log(sibling);
  const text = sibling.textContent;
  console.log(text);
};
  //  const buttonSibling = button.previousElementSibling; //сосед кнопки, бокс с текстом

  //  buttonSibling.classList.toggle('_hide');
  //   if (buttonSibling.classList.contains('_hide') === false){
  //      event.target.textContent = 'Скрыть';
  //      sibling.classList.add('_rotate');
  //   } else {
  //      event.target.textContent = 'Читать далее';
  //      sibling.classList.remove('_rotate');
  //   }
}

buttonShow.forEach (( item, index ) => {
  buttonShow[index].addEventListener ('click', toggleButtonShow);
});



let swiper = undefined;
let init= false;

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
    const containers = document.querySelectorAll('.swiper-container');
    let wrappers = [];
    let items = [];
    let pagination = [];
    containers.forEach ((elem, index) => {
      let wrapper = containers[index].querySelectorAll('.swiper-wrapper');
      wrappers.push(wrapper);
      console.log(wrappers);
      let item = containers[index].querySelectorAll('.swiper-item');
      items.push(item);
      let page = containers[index].querySelectorAll('.swiper-pagination');
      pagination.push(page);
    });
    removeClass(pagination,'swiper-pagination');
    removeClass(items,'swiper-item');
    removeClass(wrappers,'swiper-wrapper');
    removeClass(containers,'swiper-container');

    // if (wrapper.classList.contains('swiper-wrapper')) {
    //   wrapper.classList.remove('swiper-wrapper');
    //   console.log('Wrapper remove');
    // }
    // if (item.classList.contains('swiper-item')) {
    //   item.classList.remove('swiper-item');
    //   console.log('Item remove');
    // }
    // if (page.classList.contains('swiper-pagination')) {
    //   page.classList.remove('swiper-pagination');
    //   console.log('Pagination remove');
    // }
    // console.log(wrappers, items, pagination);
    };
  }
  function removeClass (elems, value) {
    elems.forEach((elem, index) => {
      let flag = elems[index].classList.contains(`${value}`);
      if (flag) {
        elems[index].classList.remove(`${value}`);
        console.log(`${value} remove`);
      }
      });
  };
document.addEventListener("DOMContentLoaded", initSwiper);
window.addEventListener("resize", initSwiper);