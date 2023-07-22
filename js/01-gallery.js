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
    if (source === item.original) {
      const instance = basicLightbox.create(
        ` <img
    class="gallery__image"
    src="${item.original}"
    data-source="${item.original}"
    alt="${item.description}"
    />`,
        {
          hangler: null,
          onShow(instance) {
            console.log(this);
            this.hangler = onKey.bind(instance);
            document.addEventListener("keydown", this.hangler);
          },
          onClose: (instance) => {
            document.removeEventListener("keydown", this.hangler);
          },
        }
      );
      instance.show();
    }
  });
}
function onKey(evt) {
  if (evt.code === "Escape") {
    this.close();
  }
}
