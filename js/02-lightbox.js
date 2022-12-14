import {galleryItems} from './gallery-items.js'
// Change code below this line
// document
//   .querySelector('link')
//   .insertAdjacentHTML(
//     'beforebegin',
//     '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.11.0/simple-lightbox.min.css" integrity="sha512-2fuz5SZm+ilUXvkAiuhKoQcWBkZqRAEKhBnlIioPGOBju8E1+C6MwtpvNt/pidBXgDTU/liw70r4/4X1YJ46BQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
//   )

// const scriptLoadLib = document.createElement('script')
// scriptLoadLib.src =
//   'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.11.0/simple-lightbox.min.js'
// scriptLoadLib.crossorigin = 'anonymous'
// scriptLoadLib.referrerpolicy = 'referrer'
// scriptLoadLib.integrity =
//   'sha512-6MY1+N+yqKr8NaWCd7SsFAavdwAnxKihOP2BI0MnU+k8khGU+op83TxJE7dYj0o2mmtfDbRs7U1jAmAeEOjUnw=='
// document.querySelector('script').after(scriptLoadLib)

// оголошення
let gallery = {}

const refGalleryContainer = document.querySelector('.gallery')

const createGallery = galleryItems =>
  galleryItems
    .map(
      ({original, preview, description}) =>
        `<li><a class="gallery__item" href="${original}"><img style="display:block" class="gallery__image" src="${preview}" alt="${description}" /></a></li>`,
    )
    .join('')

const inputGalleryToDocument = () => {
  document.querySelector('.gallery').innerHTML = createGallery(galleryItems)
}

const turnOnScroll = () => {
  document.body.style.paddingRight = 0
  document.body.style.overflowY = 'visible'
}

const turnOffScroll = () => {
  document.body.style.paddingRight = '15px'
  document.body.style.overflowY = 'hidden'
}

const something = () => {
  console.log('ssss')
}

const openModalWindow = gallery => {}

const onGalleryClick = event => {
  event.preventDefault()

  gallery.open()

  openModalWindow(gallery)

  //turnOffScroll()

  // document
  //   .querySelector('.basicLightbox')
  //   .addEventListener('click', turnOnScroll, {once: true})
  // document.body.addEventListener('keydown', onKeyDownEsc)
}

// тіло
inputGalleryToDocument()

gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})
gallery.on('show.simplelightbox', () => {
  console.log('start show')
})
gallery.on('shown.simplelightbox', () => {
  console.log('shown')
})
gallery.on('close.simplelightbox', () => {
  console.log('start close')
})
gallery.on('closed.simplelightbox', () => {
  console.log('closed')
  //   document.body.style.paddingRight = 0
})

refGalleryContainer.addEventListener('click', onGalleryClick)
