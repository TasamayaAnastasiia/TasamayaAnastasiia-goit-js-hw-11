import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import '../css/loader.css';
import { renderImages } from "./render-fuctions.js";


const formForSearching = document.querySelector(".form_images");
const inputSearch = document.querySelector(".input_searching");


formForSearching.addEventListener("submit", (e) => {
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

    fetch(`https://pixabay.com/api/?${searchParams.toString()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch images");
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                throw new Error("No images found");
            }
            renderImages(data.hits);
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: error.message,
            });
        });
});