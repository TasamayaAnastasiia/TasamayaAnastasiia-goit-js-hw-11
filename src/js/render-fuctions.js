export function renderImages(images) {
    gallery.innerHTML = '';

    images.forEach(image => {
        const cardHTML = `
            <li class="image-card">
                <img src="${image.webformatURL}" alt="${image.tags}">
                <div class="box-info">
                <p>Likes</p>
                <p>Views</p>
                <p>Comments</p>
                <p>Downloads</p>
                </div>
                <div class="box-quantity">
                <p>${image.likes}</p>
                <p>${image.views}</p>
                <p>${image.comments}</p>
                <p>${image.downloads}<p>
                </div>
            </li>
        `;
        gallery.insertAdjacentHTML("beforeend", cardHTML);
    });
}
