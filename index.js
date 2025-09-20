import{a as g,S as h,i as c}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/";async function b(i){return(await g.get(y,{params:{key:"52388349-b652c0030e98c4b6e488e9cd6",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}})).data}const u=document.querySelector(".gallery"),s=document.getElementById("loader"),L=new h(".gallery a",{captionsData:"alt",captionDelay:200});function w(i){if(!Array.isArray(i)||i.length===0)return;const o=i.map(r=>{const{webformatURL:a,largeImageURL:e,tags:t,likes:n,views:d,comments:m,downloads:p}=r;return`
      <li class="gallery__item">
        <a class="gallery__link" href="${e}">
          <img class="gallery__image" src="${a}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${n}</p>
          <p class="info-item"><b>Views:</b> ${d}</p>
          <p class="info-item"><b>Comments:</b> ${m}</p>
          <p class="info-item"><b>Downloads:</b> ${p}</p>
        </div>
      </li>
    `}).join("");u.insertAdjacentHTML("beforeend",o),L.refresh()}function A(){u.innerHTML=""}function S(){s&&(s.classList.remove("hidden"),s.setAttribute("aria-hidden","false"))}function l(){s&&(s.classList.add("hidden"),s.setAttribute("aria-hidden","true"))}const f=document.querySelector(".form"),v=f.querySelector('input[name="search-text"]');f.addEventListener("submit",_);function _(i){i.preventDefault();const o=v.value.trim();if(!o){c.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}A(),S(),b(o).then(r=>{if(l(),!r||!Array.isArray(r.hits)||r.hits.length===0){c.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(r.hits),c.success({title:"Success",message:`Found ${r.totalHits} images.`,position:"topRight"})}).catch(r=>{l(),console.error(r),c.error({title:"Error",message:"An error occurred while fetching images. Check console.",position:"topRight"})})}
//# sourceMappingURL=index.js.map
