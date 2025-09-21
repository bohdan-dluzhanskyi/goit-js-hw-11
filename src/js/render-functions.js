import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");
const loaderEl = document.getElementById("loader");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 200,
});

export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const markup = images
    .map(img => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = img;
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${largeImageURL}">
          <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${likes}</p>
          <p class="info-item"><b>Views:</b> ${views}</p>
          <p class="info-item"><b>Comments:</b> ${comments}</p>
          <p class="info-item"><b>Downloads:</b> ${downloads}</p>
        </div>
      </li>
    `;
    })
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = "";
}

export function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove("hidden");
  loaderEl.setAttribute("aria-hidden", "false");
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add("hidden");
  loaderEl.setAttribute("aria-hidden", "true");
}
