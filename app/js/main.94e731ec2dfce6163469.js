(()=>{var e={483:function(){!function(){"use strict";function e(e){var t=!0,n=!1,s=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!o[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function c(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function a(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&c(e.activeElement),t=!0)}function u(e){t=!1}function m(e){i(e.target)&&(t||r(e.target))&&c(e.target)}function p(e){i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(s),s=window.setTimeout((function(){n=!1}),100),d(e.target))}function v(e){"hidden"===document.visibilityState&&(n&&(t=!0),l())}function l(){document.addEventListener("mousemove",f),document.addEventListener("mousedown",f),document.addEventListener("mouseup",f),document.addEventListener("pointermove",f),document.addEventListener("pointerdown",f),document.addEventListener("pointerup",f),document.addEventListener("touchmove",f),document.addEventListener("touchstart",f),document.addEventListener("touchend",f)}function b(){document.removeEventListener("mousemove",f),document.removeEventListener("mousedown",f),document.removeEventListener("mouseup",f),document.removeEventListener("pointermove",f),document.removeEventListener("pointerdown",f),document.removeEventListener("pointerup",f),document.removeEventListener("touchmove",f),document.removeEventListener("touchstart",f),document.removeEventListener("touchend",f)}function f(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,b())}document.addEventListener("keydown",a,!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",v,!0),l(),e.addEventListener("focus",m,!0),e.addEventListener("blur",p,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},370:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},458:(e,t,n)=>{"use strict";e.exports=n.p+"img/acer.dc5c0a65bea36085a7e8.png"},380:(e,t,n)=>{"use strict";e.exports=n.p+"img/apple.918fa835e5defd13468e.png"},160:(e,t,n)=>{"use strict";e.exports=n.p+"img/bosch.b53e5840db3db26cfc67.png"},964:(e,t,n)=>{"use strict";e.exports=n.p+"img/hp.0d1e9ad7d8b91ae14346.png"},582:(e,t,n)=>{"use strict";e.exports=n.p+"img/lenovo.7e6d319b489073b82cfe.png"},778:(e,t,n)=>{"use strict";e.exports=n.p+"img/samsung.ae09ec98ccdbfe24f1f5.png"},473:(e,t,n)=>{"use strict";e.exports=n.p+"img/sony.e74fec982ec50fb90835.png"},792:(e,t,n)=>{"use strict";e.exports=n.p+"img/viewsonic.1ee82e60a9e7e3f4bc12.png"},731:(e,t,n)=>{"use strict";e.exports=n.p+"img/cps.cb8dfd46481837a8c47c.png"},664:(e,t,n)=>{"use strict";e.exports=n.p+"img/arrow.e31ada0fec41679bf985.svg"},773:(e,t,n)=>{"use strict";e.exports=n.p+"img/burger.098abb1599d51b6ef04d.svg"},371:(e,t,n)=>{"use strict";e.exports=n.p+"img/call.b3f435f7317e70d7065b.svg"},878:(e,t,n)=>{"use strict";e.exports=n.p+"img/chat.e0f6fe5aeab076468934.svg"},213:(e,t,n)=>{"use strict";e.exports=n.p+"img/checkstatus.dda8a0e71315315ee45a.svg"},799:(e,t,n)=>{"use strict";e.exports=n.p+"img/close-burger.f4159b4fd6408dcb61e5.svg"},323:(e,t,n)=>{"use strict";e.exports=n.p+"img/expand.12b3a7f3a9053a834cd6.svg"},481:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo.0e974b40dc531ffcc9ff.svg"},152:(e,t,n)=>{"use strict";e.exports=n.p+"img/more.4b9c1ab9cb471406009a.svg"},101:(e,t,n)=>{"use strict";e.exports=n.p+"img/order.20cf5e0f79e849341f39.svg"},738:(e,t,n)=>{"use strict";e.exports=n.p+"img/profile.f53f4d75111616e46fd7.svg"},401:(e,t,n)=>{"use strict";e.exports=n.p+"img/repair.1a391734d700e965015a.svg"},358:(e,t,n)=>{"use strict";e.exports=n.p+"img/search.f28d22b54286cb1c12ea.svg"},418:(e,t,n)=>{"use strict";e.exports=n.p+"img/favicon.6922ae43bb974df9ecb7.ico"}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{"use strict";n(483);var e=n(370),t=n.n(e),s=new URL(n(418),n.b),o=new URL(n(773),n.b),i=new URL(n(371),n.b),r=new URL(n(878),n.b),c=new URL(n(738),n.b),d=new URL(n(401),n.b),a=new URL(n(213),n.b),u=new URL(n(799),n.b),m=new URL(n(481),n.b),p=new URL(n(358),n.b),v=new URL(n(323),n.b),l=new URL(n(731),n.b),b=new URL(n(582),n.b),f=new URL(n(664),n.b),g=new URL(n(778),n.b),L=new URL(n(380),n.b),w=new URL(n(792),n.b),E=new URL(n(160),n.b),h=new URL(n(964),n.b),x=new URL(n(458),n.b),y=new URL(n(473),n.b),U=new URL(n(101),n.b),R=new URL(n(152),n.b),N=t()(s),_=t()(o),C=t()(i),O=t()(r),T=t()(c),A=t()(d),S=t()(a),M=t()(u),D=t()(m),j=t()(p),k=t()(v),P=t()(l),B=t()(b),K=t()(f),z=t()(g),F=t()(L),I=t()(w),V=t()(E),q=t()(h),G=t()(x),H=t()(y),Q=t()(U);t()(R);var W=document.querySelectorAll(".btn-show");function X(e){var t,n=e.target,s=n.parentElement.previousElementSibling;function o(e,t){s.classList.toggle("_hide"),!1===s.classList.contains("_hide")?(e.textContent="Скрыть",t.classList.add("_rotate")):s.parentElement.classList.contains("about__text")?(e.textContent="Читать далее",t.classList.remove("_rotate")):(e.textContent="Показать все",t.classList.remove("_rotate"))}n.matches("span")?o(n,t=n.previousElementSibling):o((t=n).nextElementSibling,t)}W.forEach((function(e,t){W[t].addEventListener("click",X)}));var Y=void 0,J=!1;function Z(){window.innerWidth<=768?J||(J=!0,Y=new Swiper(".section",{direction:"horizontal",slidesPerView:"auto",slidesOffsetBefore:16,centeredSlides:!1,spaceBetween:16,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0}})):J&&void 0!==Y&&Y.destroy(!0,!0)}document.addEventListener("DOMContentLoaded",Z),window.addEventListener("resize",Z)})()})();