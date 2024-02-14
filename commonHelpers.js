import{i as n,S as l}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=document.querySelector(".form_images"),u=document.querySelector(".input_searching"),c=document.querySelector(".image-gallery");p.addEventListener("submit",async i=>{i.preventDefault();const t=u.value.trim();if(!t){n.error({title:"Error",message:"Please enter a keyword for search"});return}const s=new URLSearchParams({key:"42360153-ab2745711a491af6a9cf29268",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const o=await fetch(`https://pixabay.com/api/?${s.toString()}`);if(!o.ok)throw new Error("Failed to fetch images");const e=await o.json();if(e.hits.length===0)throw new Error("No images found");d(e.hits)}catch(o){n.error({title:"Error",message:o.message})}});async function d(i){c.innerHTML="";let t="";const s=document.querySelector(".container-loader");s.style.display="block",await new Promise(e=>setTimeout(e,2e3)),i.forEach(e=>{t+=`
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
        `}),c.insertAdjacentHTML("beforeend",t),s.style.display="none",new l(".gallery-link",{captionType:"attr",captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
