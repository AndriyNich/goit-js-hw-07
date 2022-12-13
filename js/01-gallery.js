import {galleryItems} from './gallery-items.js'

// прописуємо стилі і бібліотеку basicLightbox
document
  .querySelector('link')
  .insertAdjacentHTML(
    'beforebegin',
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css" />',
  )

const scriptLoadLib = document.createElement('script')
scriptLoadLib.src =
  'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js'
document.querySelector('script').append(scriptLoadLib)

// оголошення

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

const turnOnScroll = () => {
  document.body.style.paddingRight = 0
  document.body.style.overflowY = 'visible'
}

const onGalleryClick = event => {
  event.preventDefault()

  basicLightbox
    .create(
      `
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    )
    .show()

  document.body.style.paddingRight = '15px'
  document.body.style.overflowY = 'hidden'
  document
    .querySelector('.basicLightbox')
    .addEventListener('click', turnOnScroll, {once: true})
}

// тіло

inputGalleryToDocument()

refGalleryContainer.addEventListener('click', onGalleryClick)
