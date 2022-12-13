import {galleryItems} from './gallery-items.js'
// Change code below this line

// import * as basicLightbox from 'basiclightbox'

const refGalleryContainer = document.querySelector('div.gallery')

const createGallery = galleryItems =>
  galleryItems
    .map(
      ({original, preview, description}) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`,
    )
    .join('')

const inputGalleryToDocument = innerHtml => {
  refGalleryContainer.innerHTML = createGallery(galleryItems)
}

inputGalleryToDocument()

const onGalleryClick = event => {
  console.log(event.target.dataset.source)
  const instance = basicLightbox
    .create(
      `
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    )
    .show()
}

refGalleryContainer.addEventListener('click', onGalleryClick)
