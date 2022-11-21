// Створення і рендер розмітки на підставі масиву даних galleryItems
// і наданого шаблону елемента галереї.Використовуй готовий код з першого завдання.

// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
// Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.

// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

// Подивися в документації секцію «Options» і додай відображення підписів
// до зображень з атрибута alt.Нехай підпис буде знизу і
// з'являється через 250 мілісекунд після відкриття зображення.

import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

//
const gallery = document.querySelector(".gallery");
const galleryList = createGalleryCardsItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);

function createGalleryCardsItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      loading="lazy" width="100%" height="100%"
      class="gallery__img"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
