import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const container = document.querySelector(".gallery");
let elements = "";
const element = galleryItems
  .map((item) => {
    const li = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
    elements = elements + li;
  })
  .join("");

container.insertAdjacentHTML("beforeend", elements);
container.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const source = evt.target.dataset.source;
  galleryItems.map((item) => {
    const instance = basicLightbox.create(
      ` <img
    class="gallery__image"
    src="${item.original}"
    data-source="${item.original}"
    alt="${item.description}"
    />`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", onKey);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", onKey);
        },
      }
    );
    function onKey(evt) {
      console.log(evt);
      if (instance.visible() && evt.code === "Escape") {
        instance.close();
      }
    }
    if (source === item.original) {
      instance.show();
    }
  });
}
