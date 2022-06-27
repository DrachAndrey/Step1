document.querySelectorAll(".btn").forEach((elem) => {
  elem.addEventListener("mousedown", () => elem.classList.add("btn-ation"));
  elem.addEventListener("mouseup", () => elem.classList.remove("btn-ation"));
});

const tabsElements = document.querySelector(".tabs");
const contentCollection = document.querySelector(".tabs-content");
const dataTab = contentCollection.querySelectorAll("[data-tab]");

tabsElements.addEventListener("click", (e) => {
  tabsElements.childNodes.forEach((elem) => (elem.className = "tabs-title"));
  tabsElements.querySelectorAll("div").forEach((elem) => (elem.className = ""));

  e.target.classList.add("active");
  e.target.querySelector("div").className = "triangle";

  dataTab.forEach((elem) => {
    elem.className = "tabs-content-display-none";
    if (elem.dataset.tab == e.target.dataset.tab) {
      elem.classList.remove("tabs-content-display-none");
      elem.classList.add("text-tabs-content");
    }
  });
});

const tabsElementsAmazing = document.querySelector(".tabs-our-amazing");
const contentCollectionAmazing = document.querySelector(".photo-amazing-work");
const dataTabAmazing = contentCollectionAmazing.querySelectorAll("[data-tab]");
const dataAllAmazing = contentCollectionAmazing.querySelectorAll("[data-all]");
const secondClick = document.querySelector(".second-click");

tabsElementsAmazing.addEventListener("click", (e) => {
  tabsElementsAmazing.childNodes.forEach(
    (elem) => (elem.className = "tabs-title-our-amazing")
  );
  secondClick.childNodes.forEach(
    (e) => (e.className = "tabs-content-display-none")
  );
  e.target.classList.add("active");

  btnAmazingWord.className = "btn btn-first btn-amazing";
  contentCollectionAmazing.childNodes.forEach(
    (e) => (e.className = "tabs-content-display-none")
  );
  secondClick.childNodes.forEach(
    (e) => (e.className = "tabs-content-display-none")
  );
  secondClick.className = "second-click";
  dataTabAmazing.forEach((elem) => {
    if (elem.dataset.tab == e.target.dataset.tab) {
      elem.className = "img-tabs-content";
    }
  });
  dataAllAmazing.forEach((elem) => {
    if (elem.dataset.all == e.target.dataset.all) {
      elem.className = "img-tabs-content";
    }
  });
});

const Loading = document.querySelector(".loading");
const btnAmazingWord = document.querySelector(".btn-amazing");
btnAmazingWord.addEventListener("click", () => {
  Loading.className = "animate";
  if (secondClick.className == "second-click") {
    setTimeout(() => {
      contentCollectionAmazing.childNodes.forEach(
        (e) => (e.className = "img-tabs-content")
      );
      Loading.className = "loading";
      secondClick.classList.add("click");
    }, 2000);
  } else {
    setTimeout(() => {
      secondClick.childNodes.forEach((e) => (e.className = "img-tabs-content"));
      btnAmazingWord.className = "tabs-content-display-none";
      Loading.className = "loading";
    }, 2000);
  }
});

let width = 70;
let list = carousel.querySelector(".ul-carusel");
let listElems = carousel.querySelectorAll(".li-carusel");
let position = 0;
carousel.querySelector(".prev").addEventListener("click", () => {
  position += width;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
  listElems.forEach((e, i, vv) => {
    if (e.className == "li-carusel acve-li" && i > 0 && i < listElems.length) {
      listElems[i].className = "li-carusel";
      listElems[i - 1].className = "li-carusel acve-li";
      dataActer.forEach((elem) => {
        elem.className = "display-none";
        if (elem.dataset.acter == listElems[i - 1].dataset.acter) {
          elem.className = "description-carusel-element";
        } else elem.className = "display-none";
      });
      vv();
    }
  });
});

carousel.querySelector(".next").addEventListener("click", () => {
  position -= width;
  position = Math.max(position, -width * (listElems.length - 4));
  list.style.marginLeft = position + "px";

  listElems.forEach((e, i, vv) => {
    if (e.className == "li-carusel acve-li" && i < listElems.length - 1) {
      listElems[i].className = "li-carusel";
      listElems[i + 1].className = "li-carusel acve-li";
      dataActer.forEach((elem) => {
        elem.className = "display-none";
        if (elem.dataset.acter == listElems[i + 1].dataset.acter) {
          elem.className = "description-carusel-element";
        } else elem.className = "display-none";
      });
      vv();
    }
  });
});

const tabsCarusel = document.querySelectorAll(".photo-carusel-li");
const contentCarusel = document.querySelector(".description-carusel");
const dataActer = contentCarusel.querySelectorAll("[data-acter]");

tabsCarusel.forEach((el) => {
  el.addEventListener("click", (e) => {
    tabsCarusel.forEach((elem) => (elem.parentNode.className = "li-carusel"));
    e.target.parentNode.classList.add("acve-li");
    dataActer.forEach((elem) => {
      elem.className = "display-none";
      if (elem.dataset.acter == e.target.parentNode.dataset.acter) {
        elem.className = "description-carusel-element";
      } else elem.className = "display-none";
    });
  });
});

$(".grid").masonry({
  itemSelector: ".grid-item",
  columnWidth: 386.5,
});

const LoadingGallery = document.querySelector(".loading-gallery");
const btnGallery = document.querySelector(".btn-gallery");
const gridGallery = document.querySelector(".grid");
const displayNoneGallery = gridGallery.querySelectorAll(".display-none");

btnGallery.addEventListener("click", () => {
  LoadingGallery.className = "animate";
  setTimeout(() => {
    btnGallery.className = "tabs-content-display-none";
    displayNoneGallery.forEach((e) => e.classList.remove("display-none"));
    LoadingGallery.className = "loading-gallerys";
  }, 2000);
});
