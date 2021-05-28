const galleryImages = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

//создал галерею, пока что  не живую.//
const makeGallery = document.querySelector(".gallery");

function makeGalleryItemMarkup({ preview, description, original }) {
  return ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" /></a>
    </li>`;
}
const makeGalleryItemsEls = galleryImages.map(makeGalleryItemMarkup).join("");
makeGallery.insertAdjacentHTML("afterbegin", makeGalleryItemsEls);

//попытка оживить галерею//

const images = document.querySelector(".gallery");
const modalOpen = document.querySelector(".lightbox");
const modalClose = document.querySelector(".lightbox__button");
const overlay = document.querySelector(".lightbox__overlay");

function galleryList(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  openModal(event.target.getAttribute("data-source"));
}
images.addEventListener("click", galleryList);

function openModal(dataSource) {
  images.addEventListener("keydown", onEscapePress);
  modalOpen.classList.add("is-open");
  document.querySelector(".lightbox__image").src = dataSource;
}

function modalCloseBtn() {
  images.removeEventListener("keydown", onEscapePress);
  modalOpen.classList.remove("is-open");
  document.querySelector(".lightbox__image").src = "";
}
modalClose.addEventListener("click", modalCloseBtn);

function overlayClickingCLosesModal(event) {
  if (event.currentTarget === event.target) {
    modalCloseBtn();
  }
}
overlay.addEventListener("click", overlayClickingCLosesModal);

function onEscapePress(event) {
  const ESC_CODE = "Escape";
  if (event.code === ESC_CODE) {
    modalCloseBtn();
  }
}

//переключение кнопками влево-вправо оставил на будущее :)//
