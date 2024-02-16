import{a as l}from"./assets/vendor-0cb09735.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();l.defaults.headers.common["x-api-key"]="live_EplPvU7ci3YavzCPFlo4YRRLRcifpeQ1TyzYFroY589Dsj1Bw8eyTsvrcJ5pS5A5";async function u(){return(await l.get("https://api.thecatapi.com/v1/breeds")).data}async function d(e){return(await l.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`)).data}const o={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),info:document.querySelector(".cat-info")};o.select.addEventListener("change",p);f();async function f(){try{await u().then(e=>{const r=m(e);o.select.innerHTML=r}),n(o.select,!0)}catch(e){n(o.error,!0),console.log(e)}finally{n(o.loader,!1)}}async function p(){try{n(o.error,!1),n(o.info,!1),n(o.loader,!0);const e=o.select.value,r=await d(e);h(r),n(o.info,!0)}catch(e){n(o.error,!0),console.log(e)}finally{n(o.loader,!1)}}function m(e){return e.map(({id:r,name:c})=>`<option value="${r}">${c}</option>`)}function h(e){const r=e[0].url,c=e[0].breeds[0],i=`
    <img
      class="image"
      src="${r}" 
      alt="${c.name}" 
      width="500" 
      height="500">
    <div class="description">
      <h1 class="title">${c.name}</h1>
      <p class="text">${c.description}</p>
      <div class="features">
        <h3 class="title">Temperament: </h3>
        <span class="text">${c.temperament}</span>
    </div>
    </div>  
  `;o.info.innerHTML=i,n(o.info,!0)}function n(e,r){e.classList.toggle("visuallyhidden",!r)}
//# sourceMappingURL=commonHelpers.js.map
