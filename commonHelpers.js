import{A as n,S as c}from"./assets/vendor-8b9fa5ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();new n(".accordion-container",{openOnInit:[0]});new c(".swiper1",{slidesPerView:6,spaceBetween:0,loop:!0,mousewheel:!0,keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:2},769:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".js-about-slider-arrow"}});
//# sourceMappingURL=commonHelpers.js.map