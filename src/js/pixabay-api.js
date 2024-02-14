import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formForSearching = document.querySelector(".form_images");
const inputSearch = document.querySelector(".input_searching");
const gallery = document.querySelector(".image-gallery");

formForSearching.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchQuery = inputSearch.value.trim();
    if (!searchQuery) {
        iziToast.error({
            title: "Error",
            message: "Please enter a keyword for search",
        });
        return;
    }

    const searchParams = new URLSearchParams({
        key: "42360153-ab2745711a491af6a9cf29268",
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    try {
        const response = await fetch(`https://pixabay.com/api/?${searchParams.toString()}`);
        if (!response.ok) {
            throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        if (data.hits.length === 0) {
            throw new Error("No images found");
        }
        renderImages(data.hits);
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: error.message,
        });
    }
});

export async function renderImages(images) {
    gallery.innerHTML = '';
    let cardHTML = ``;
    
    const loadingIndicator = document.querySelector(".container-loader");
    loadingIndicator.style.display = 'block';

    // для примера индикатора загрузки
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    images.forEach(image => {
        cardHTML += `
            <li class="image-card">
                <a class="gallery-link" href="${image.webformatURL}">
                    <img class="img-example" src="${image.webformatURL}" alt="${image.tags}"></img>
                </a>

                    <div class="tumb">
                        <ul class="box-info">
                            <li>
                                <p>Likes</p>
                                <p>${image.likes}</p>
                            </li>
                            <li>
                                <p>Views</p>
                                <p>${image.views}</p>
                            </li>
                            <li>
                                <p>Comments</p>
                                <p>${image.comments}</p>
                            </li>
                            <li>
                                <p>Downloads</p>
                                <p>${image.downloads}</p>
                            </li>
                        </ul>
                    </div>
            </li>
        `;
    });
    
    gallery.insertAdjacentHTML("beforeend", cardHTML);
    
    loadingIndicator.style.display = 'none';

    const galleryImage = new SimpleLightbox('.gallery-link', {
      captionType: 'attr', 
      captionsData: 'alt',
      captionDelay: 250,
    });
    galleryImage.refresh();
}


