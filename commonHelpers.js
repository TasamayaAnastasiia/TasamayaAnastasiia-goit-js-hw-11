import{S as c,i as n}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();async function l(a){const o=document.querySelector(".image-gallery");o.innerHTML="";let s="";const t=document.querySelector(".container-loader");t.style.display="block",await new Promise(e=>setTimeout(e,2e3)),a.forEach(e=>{s+=`
            <li class="image-card">
                <a class="gallery-link" href="${e.webformatURL}">
                    <img class="img-example" src="${e.webformatURL}" alt="${e.tags}"></img>
                </a>

                    <div class="tumb">
                        <ul class="box-info">
                            <li>
                                <p>Likes</p>
                                <p>${e.likes}</p>
                            </li>
                            <li>
                                <p>Views</p>
                                <p>${e.views}</p>
                            </li>
                            <li>
                                <p>Comments</p>
                                <p>${e.comments}</p>
                            </li>
                            <li>
                                <p>Downloads</p>
                                <p>${e.downloads}</p>
                            </li>
                        </ul>
                    </div>
            </li>
        `}),o.insertAdjacentHTML("beforeend",s),t.style.display="none",new c(".gallery-link",{captionType:"attr",captionsData:"alt",captionDelay:250}).refresh()}const p=document.querySelector(".form_images"),d=document.querySelector(".input_searching");p.addEventListener("submit",async a=>{a.preventDefault();const o=d.value.trim();if(!o){n.error({title:"Error",message:"Please enter a keyword for search"});return}const s=new URLSearchParams({key:"42360153-ab2745711a491af6a9cf29268",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const t=await fetch(`https://pixabay.com/api/?${s}`);if(!t.ok)throw new Error("Failed to fetch images");const r=await t.json();if(r.hits.length===0)throw new Error("No images found");l(r.hits)}catch(t){n.error({title:"Error",message:t.message})}});
//# sourceMappingURL=commonHelpers.js.map
