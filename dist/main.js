(()=>{var e={19:()=>{}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o(19);o.n(e)()(),function(){const e=document.querySelectorAll(".item"),t=document.querySelector(".title"),o=document.querySelector(".modal-container"),n=document.querySelector("#Add-popup");e.forEach((e=>{e.addEventListener("click",(r=>{const c=e.querySelector("span").textContent;console.log(r.target.textContent),"Add New Plan"===r.target.textContent?(t.textContent="",n.addEventListener("click",(()=>{o.style.display="block"}))):(o.style.display="none",t.textContent=c)}))}))}()})()})();