import{A as w,i as u,a as E,S as q}from"./assets/vendor-bb2cb194.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers");function o(r){const t=r.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function s(){o(e)?e.classList.add("animate"):e.classList.remove("animate")}window.addEventListener("scroll",s),window.addEventListener("resize",s),s()});const L=document.querySelector("#backdrop"),y=document.querySelector(".modal-title"),h=document.querySelector(".modal-text");function k(e,o){y.textContent=e.trim(),h.textContent=o.trim(),L.classList.add("modal-visible")}function b(){y.textContent="",h.textContent="",L.classList.remove("modal-visible")}const I=document.querySelector("#modal-close-btn"),A=document.querySelector("#backdrop");A.addEventListener("click",e=>{if(e.currentTarget===e.target)b();else return});I.addEventListener("click",()=>{b()});window.addEventListener("keydown",e=>{if(e.key==="Escape")b();else return});const m=new Swiper(".swiper2",{direction:"horizontal",watchSlidesProgress:!0,keyboard:{enabled:!0},mousewheel:!0,effect:"flip",flipEffect:{slideShadows:!0,limitRotation:!0},navigation:{nextEl:".project-button-next",prevEl:".project-button-prev"}});function S(){const e=document.querySelector(".project-button-next"),o=document.querySelector(".project-button-prev");m.isEnd?(e.classList.add("project-button-disabled"),e.setAttribute("disabled",!0)):(e.classList.remove("project-button-disabled"),e.removeAttribute("disabled")),m.isBeginning?(o.classList.add("project-button-disabled"),o.setAttribute("disabled",!0)):(o.classList.remove("project-button-disabled"),o.removeAttribute("disabled"))}m.on("slideChange",S);S();document.querySelectorAll(".swiper2 .swiper-slide img").forEach(e=>{e.addEventListener("click",()=>{m.slideNext()})});const O=document.querySelectorAll(".accordion");O.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mobile-nav-toggle"),o=document.querySelector(".mobile-menu-close-btn"),s=document.querySelector(".nav-menu"),r=document.querySelector(".mobile-menu"),t=document.querySelector(".menu-list");document.querySelector(".mobile-nav-menu");const i=document.querySelector(".mobile-menu-container"),l=document.querySelector(".order-project-link");function p(n){const c=document.getElementById(n);c&&c.scrollIntoView({behavior:"smooth",block:"start"})}e.addEventListener("click",n=>{r.classList.toggle("open")}),s.addEventListener("click",n=>{n.preventDefault(),t.classList.toggle("hidden")}),t.addEventListener("click",n=>{n.target===n.currentTarget&&t.classList.add("hidden")}),t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",c=>{c.preventDefault();const v=n.getAttribute("href").substring(1);p(v),t.classList.add("hidden")})}),r.addEventListener("click",n=>{if(n.target===n.currentTarget){n.preventDefault(),r.classList.remove("open");return}}),l.addEventListener("click",n=>{n.preventDefault();const c=l.getAttribute("href").substring(1);p(c),r.classList.remove("open")}),i.querySelectorAll("a").forEach(n=>{n.addEventListener("click",c=>{c.preventDefault(),r.classList.remove("open");const v=n.getAttribute("href").substring(1);p(v)})}),o.addEventListener("click",n=>{r.classList.remove("open")})});const P=w.create({baseURL:"https://portfolio-js.b.goit.study/api",timeout:1e3}),x="/requests";function D(e,o){return P.post(x,{email:e.trim(),comment:o.trim()})}function j(e,o,s){const r={transitionOut:"fadeOutDown",position:"topRight",message:s,title:o,theme:"dark"};switch(e){case"error":u.error(r);break;case"success":u.success(r);break;case"info":u.info(r);break;default:u.show(r)}}const f=document.querySelector(".footer-form"),a=f.comment,d=f.email;async function C(){try{d.value=localStorage.getItem("email")||d.value,a.value=localStorage.getItem("comment")||a.value;const e=d.value,o=a.value,s=(await D(e,o)).data;k(s.title,s.message),localStorage.setItem("email",""),localStorage.setItem("comment",""),f.reset()}catch{j("error","Server Error","Please, try again.")}}f.addEventListener("submit",e=>{e.preventDefault(),localStorage.setItem("email",d.value.trim()),localStorage.setItem("comment",a.value.trim()),C()});window.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("email")&&(d.value=localStorage.getItem("email")),localStorage.getItem("comment")&&(a.value=localStorage.getItem("comment"))});const g=document.querySelector(".benefits-order-link");g.addEventListener("click",function(e){e.preventDefault();const o=g.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})});document.querySelectorAll(".swiper-slide img").forEach(e=>{e.onload=()=>{e.classList.add("loaded")}});new E(".accordion-container",{openOnInit:[0]});new q(".swiper1",{slidesPerView:6,spaceBetween:0,direction:"horizontal",loop:!0,mousewheel:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".js-about-slider-arrow"}});
//# sourceMappingURL=commonHelpers.js.map
