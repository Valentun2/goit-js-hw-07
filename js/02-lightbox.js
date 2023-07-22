import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const container = document.querySelector(".gallery");
let elements = "";
const element = galleryItems
  .map((item) => {
    const li = `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" 
      src="${item.preview}" 
      alt="${item.description}" />
   </a>
</li>

`;
    elements = elements + li;
  })
  .join("");

container.insertAdjacentHTML("beforeend", elements);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
