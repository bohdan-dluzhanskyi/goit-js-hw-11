import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";


import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-function";

const form = document.querySelector(".form");
const input = form.querySelector('input[name="search-text"]');

form.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term.",
      position: "topRight",
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (!data || !Array.isArray(data.hits) || data.hits.length === 0) {
        iziToast.error({
          title: "No results",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(data.hits);
      iziToast.success({
        title: "Success",
        message: `Found ${data.totalHits} images.`,
        position: "topRight",
      });
    })
    .catch(err => {
      hideLoader();
      console.error(err);
      iziToast.error({
        title: "Error",
        message: "An error occurred while fetching images. Check console.",
        position: "topRight",
      });
    });
}
