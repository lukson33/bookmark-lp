const anchors = document.querySelectorAll(".features__anchor");
const tabs = document.querySelectorAll(".features__tab");
const h3s = document.querySelectorAll(".tab__h3");
const titles = document.querySelectorAll(".question__title");
const items = document.querySelectorAll(".nav__item");
const nav = document.getElementsByTagName("nav")[0];
const links = document.querySelectorAll(".nav__link");
const hamburger = document.querySelector(".hamburger");
//make arrays
const anchorsArr = [...anchors];
const tabsArr = [...tabs];
const h3Arr = [...h3s];
const titlesArr = [...titles];
const itemsArr = [...items];
const linksArr = [...links];

anchorsArr.map((anchor) =>
  anchor.addEventListener("click", (e) => {
    switch (e.path[0].classList[1]) {
      case "simple":
        anchorsArr.map((anchor) => {
          if (anchor.classList.contains("simple")) {
            anchor.classList.add("active");
          } else {
            anchor.classList.remove("active");
          }
        });
        tabsArr.map((tab) => {
          if (tab.classList.contains("features__tab--1")) {
            tab.classList.add("tab-active");
            tab.classList.remove("tab-hidden");
          } else {
            tab.classList.add("tab-hidden");
            tab.classList.remove("tab-active");
          }
        });
        break;
      case "speedy":
        anchorsArr.map((anchor) => {
          if (anchor.classList.contains("speedy")) {
            anchor.classList.add("active");
          } else {
            anchor.classList.remove("active");
          }
        });
        tabsArr.map((tab) => {
          if (tab.classList.contains("features__tab--2")) {
            tab.classList.add("tab-active");
            tab.classList.remove("tab-hidden");
          } else {
            tab.classList.add("tab-hidden");
            tab.classList.remove("tab-active");
          }
        });
        break;
      case "easy":
        anchorsArr.map((anchor) => {
          if (anchor.classList.contains("easy")) {
            anchor.classList.add("active");
          } else {
            anchor.classList.remove("active");
          }
        });
        tabsArr.map((tab) => {
          if (tab.classList.contains("features__tab--3")) {
            tab.classList.add("tab-active");
            tab.classList.remove("tab-hidden");
          } else {
            tab.classList.add("tab-hidden");
            tab.classList.remove("tab-active");
          }
        });
        break;
    }
  })
);

titlesArr.map((title) =>
  title.addEventListener("click", () => {
    title.parentElement.childNodes[3].classList.toggle("question-active");
    const icon = title.parentElement.childNodes[1].childNodes[3];
    if (icon.classList.contains("fa-chevron-down")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
      icon.classList.add("icon-red");
    } else {
      icon.classList.add("fa-chevron-down");
      icon.classList.remove("fa-chevron-up");
      icon.classList.remove("icon-red");
    }
  })
);

//NAVIGATION

//remove clicks and hover effects on small devices (opacity: 0)
if (window.innerWidth < 768) {
  linksArr.map((link) => link.classList.add("remove-click"));
}
//toggle classes that block clicks and hovers when user resizes browser
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    linksArr.map((link) => link.classList.add("remove-click"));
  } else if (window.innerWidth > 768) {
    linksArr.map((link) => link.classList.remove("remove-click"));
  }
});

//function init on burger click
hamburger.addEventListener("click", () => {
  //toggle hamburger animation
  hamburger.classList.toggle("is-active");
  //toggle navigation on and off
  nav.classList.toggle("nav-active");
  //animation for link items
  itemsArr.map((item, index) => {
    //check if it has animation already (if user clicked to close the navigation)
    if (item.style.animation) {
      //if it does, remove it
      item.style.animation = "";
    } else {
      //if it doesn't, add it
      item.style.animation = `fadeText 0.5s ease forwards ${index / 14 + 0.1}s`;
    }
  });
});
