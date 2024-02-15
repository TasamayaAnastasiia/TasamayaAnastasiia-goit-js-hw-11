import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export async function renderImages(images) {
    const gallery = document.querySelector(".image-gallery");
    gallery.innerHTML = '';
    let cardHTML = ``;
    
    const loadingIndicator = document.querySelector(".container-loader");
    loadingIndicator.style.display = 'block';

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
