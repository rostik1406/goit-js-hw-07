// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

// 
const galleryEl = document.querySelector(".gallery");
const galleryList = createImageGalleryCard(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryList);

function createImageGalleryCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img 
      class="gallery__img"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>
    `;
    })
    .join("");
}

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  const imgSource = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img
    src="${imgSource}"
    >
`);

  instance.show();
}
